import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

let apiKey = "";
try {
    const envFile = fs.readFileSync('.env', 'utf-8');
    const match = envFile.match(/VITE_GEMINI_API_KEY=(.*)/);
    if (match) apiKey = match[1].replace(/["']/g, "").trim();
} catch (e) { }

if (!apiKey) {
    console.error("No API key found in .env");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function run() {
    try {
        console.log("== Testing @google/genai (gemini-2.5-flash-native-audio-preview-09-2025) ==");

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-native-audio-preview-09-2025',
            contents: 'Fale a palavra: Bicalho',
            config: {
                responseModalities: ["AUDIO"],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: {
                            voiceName: "Puck"
                        }
                    }
                }
            }
        });

        console.log("Response OK!");

        let hasAudio = false;
        if (response.candidates && response.candidates[0].content.parts) {
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData && part.inlineData.mimeType.startsWith('audio/')) {
                    console.log("Found Audio Part:", part.inlineData.mimeType);
                    hasAudio = true;
                }
            }
        }
        if (!hasAudio) {
            console.log("No audio found. Parts:", JSON.stringify(response.candidates[0].content.parts, null, 2));
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

run();
