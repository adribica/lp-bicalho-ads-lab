import { GoogleGenerativeAI } from '@google/generative-ai';
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

const genAI = new GoogleGenerativeAI(apiKey);

async function run() {
    try {
        console.log("== Testing Audio Generation (gemini-2.0-flash) ==");
        // Try passing apiVersion 'v1alpha' to get access to speechConfig if it's there
        const audioModel = genAI.getGenerativeModel(
            { model: "gemini-2.0-flash" },
            { apiVersion: 'v1alpha' }
        );
        const req = {
            contents: [{ role: 'user', parts: [{ text: "Olá! Este é um teste de áudio." }] }],
            generationConfig: {
                responseModalities: ["AUDIO"],
                speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Puck" } } }
            }
        };
        const resultAudio = await audioModel.generateContent(req);

        const candidate = resultAudio.response.candidates[0];
        const audioPart = candidate.content.parts.find(p => p.inlineData && p.inlineData.mimeType.startsWith('audio/'));
        if (audioPart) {
            console.log("AUDIO GENERATED SUCCESSFULLY! MIME:", audioPart.inlineData.mimeType);
            console.log("Audio length roughly:", audioPart.inlineData.data.length, "bytes/chars");
        } else {
            console.log("No audio part found. Parts:", JSON.stringify(candidate.content.parts, null, 2));
        }
    } catch (e) {
        console.error("Audio Generation failed:", e.message);
    }
}
run();
