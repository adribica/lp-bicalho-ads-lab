import { GoogleGenAI, Modality } from '@google/genai';

let audioContext: AudioContext | null = null;
let coachAnalyser: AnalyserNode | null = null;

export function getAudioAnalyser() {
    return coachAnalyser;
}

function ensureAudioContext(): AudioContext {
    if (!audioContext || audioContext.state === 'closed') {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });

        coachAnalyser = audioContext.createAnalyser();
        coachAnalyser.fftSize = 512;
        coachAnalyser.smoothingTimeConstant = 0.85;
    }
    return audioContext;
}

export async function unlockAudioContext(): Promise<boolean> {
    try {
        const ctx = ensureAudioContext();
        if (ctx.state === 'suspended') {
            await ctx.resume();
        }
        // Pulso p/ destravar output no iOS/Safari
        if (ctx.state === 'running') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            gain.gain.value = 0;
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.01);
        }
        return ctx.state === 'running';
    } catch {
        return false;
    }
}

function decodeBase64Audio(base64: string): Uint8Array {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i += 1) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

async function convertInt16ToAudioBuffer(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel += 1) {
        const channelData = buffer.getChannelData(channel);
        for (let i = 0; i < frameCount; i += 1) {
            channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
        }
    }
    return buffer;
}

/**
 * Dispara uma sessão Live do Gemini focado em Áudio (TTS).
 * Passa a instrução, retorna quando o audio terminar de tocar.
 */
export async function playGeminiLiveAudio(textToSay: string, onStartSpeaking?: () => void, onEndSpeaking?: () => void): Promise<void> {
    const apiKey = (import.meta.env.VITE_GEMINI_API_KEY as string | undefined)?.trim() || '';
    if (!apiKey) {
        console.error("VITE_GEMINI_API_KEY falhou. Sem Áudio Live.");
        throw new Error('Missing VITE_GEMINI_API_KEY.');
    }

    const ctx = ensureAudioContext();
    await unlockAudioContext();

    if (ctx.state !== 'running') {
        throw new Error('AUDIO_CONTEXT_BLOCKED');
    }

    const ai = new GoogleGenAI({ apiKey });

    return new Promise(async (resolve, reject) => {
        try {
            let isSpeaking = false;
            let nextPlaybackTime = 0;
            let pendingAudioSources = 0;
            let connectionClosed = false;

            const sessionPromise = ai.live.connect({
                model: 'gemini-2.5-flash-native-audio-preview-09-2025',
                config: {
                    systemInstruction: { parts: [{ text: "Você é o Jarvis, analista da estratégia Bicalho Ads Lab. Leia exatamente o que for passado. Sem cortes." }] },
                    responseModalities: [Modality.AUDIO],
                    speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } } }
                },
                callbacks: {
                    onopen: async () => {
                        // Manda exatamente o texto do Diagnostico para ele Falar na hora
                        const s = await sessionPromise;
                        try {
                            s.sendRealtimeInput({ text: textToSay });
                        } catch (e) {
                            console.error("Erro ao enviar input no socket:", e);
                        }
                    },
                    onmessage: async (message) => {
                        // Quando o Gemini devolve um Chunk em Áudio
                        if (message.serverContent?.modelTurn) {
                            const data = message.serverContent.modelTurn.parts?.[0]?.inlineData?.data;
                            if (data && audioContext?.state !== 'closed') {
                                if (!isSpeaking) {
                                    isSpeaking = true;
                                    onStartSpeaking?.();
                                }

                                pendingAudioSources++;
                                const buffer = await convertInt16ToAudioBuffer(decodeBase64Audio(data), audioContext!, 24000, 1);
                                const source = audioContext!.createBufferSource();
                                source.buffer = buffer;

                                source.connect(audioContext!.destination);
                                if (coachAnalyser) source.connect(coachAnalyser);

                                source.onended = () => {
                                    pendingAudioSources--;
                                    if (pendingAudioSources <= 0) {
                                        isSpeaking = false;
                                        onEndSpeaking?.();

                                        // Fecha a conexão Live Socket ao terminar a leitura do texto base
                                        setTimeout(() => {
                                            if (!connectionClosed) {
                                                connectionClosed = true;
                                                sessionPromise.then(s => { try { s.close() } catch (e) { } });
                                                resolve();
                                            }
                                        }, 1000);
                                    }
                                };

                                const startAt = Math.max(nextPlaybackTime, audioContext!.currentTime);
                                source.start(startAt);
                                nextPlaybackTime = startAt + buffer.duration;
                            }
                        }

                        // Se a IA finalizar o 'Turno' explicitamente (ela acabou de formular)
                        if (message.serverContent?.turnComplete) {
                            // Esperamos o audio terminar (os sources consumirem pendingAudioSources)
                        }
                    },
                    onerror: (e) => {
                        console.error("Socket error", e);
                        reject(e);
                    },
                    onclose: () => {
                        if (!connectionClosed) {
                            connectionClosed = true;
                            resolve();
                        }
                    },
                }
            });

        } catch (e) {
            reject(e);
        }
    });
}
