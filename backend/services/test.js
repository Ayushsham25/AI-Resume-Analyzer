// Apni API key yahan likhein (Quotes ke andar)
const API_KEY = process.env.GEMINI_API_KEY;  

async function checkModels() {
    try {
        console.log("Checking available models from Google...");
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
        const data = await response.json();
        
        if (data.error) {
            console.error("API Key Error:", data.error.message);
            return;
        }

        console.log("\n✅ Aapke account ke liye ye models available hain:");
        data.models.forEach(model => {
            // Hum sirf un models ko print kar rahe hain jo text generate kar sakte hain
            if (model.supportedGenerationMethods.includes("generateContent")) {
                console.log("->", model.name.replace('models/', ''));
            }
        });
        
    } catch (error) {
        console.error("Network ya fetch error:", error);
    }
}

checkModels();