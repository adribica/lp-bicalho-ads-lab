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

async function runREST() {
    try {
        console.log("== Testing Audio via REST (gemini-2.0-flash) ==");
        const url = `https://generativelanguage.googleapis.com/v1alpha/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;

        const payload = {
            contents: [{
                role: "user",
                parts: [{ text: "Diga apenas a palavra TESTE." }]
            }],
            generationConfig: {
                responseModalities: ["AUDIO"],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: {
                            voiceName: "Puck"
                        }
                    }
                }
            }
        };

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            const error = await res.text();
            throw new Error(`HTTP Error: ${res.status} - ${error}`);
        }

        const data = await res.json();

        let audioPartFound = false;
        if (data.candidates && data.candidates[0] && data.candidates[0].content.parts) {
            for (const part of data.candidates[0].content.parts) {
                if (part.inlineData && part.inlineData.mimeType) {
                    console.log("Found part:", part.inlineData.mimeType);
                    audioPartFound = true;
                }
            }
        }

        if (audioPartFound) {
            console.log("SUCCESS! Audio is supported natively.");
        } else {
            console.log("Response text:", data.candidates[0].content.parts[0].text);
            console.log("No audio part found in raw REST response.");
        }

    } catch (e) {
        console.error("REST Audio Generation failed:", e.message);
    }
}
runREST();
