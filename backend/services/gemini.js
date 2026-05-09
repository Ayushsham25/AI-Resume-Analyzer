const {GoogleGenerativeAI} = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeResumeWithGemini = async (resumeText) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `
    You are an expert technical recruiter and resume analyzer. Analyze the following resume text and provide feedback based strictly on the following JSON schema. Do not include markdown formatting like \`\`\`json in the output, return ONLY the raw JSON object.

    {
      "scores": {
        "overall": (number between 1.0 and 10.0),
        "keywords": (number between 1.0 and 10.0),
        "experience": (number between 1.0 and 10.0),
        "formatting": (number between 1.0 and 10.0)
      },
      "aiQuickInsight": "A single sentence summary of the resume's impact",
      "keyStrengths": [
        { "title": "Strength Name", "description": "Brief description" }
      ],
      "improvementSuggestions": [
        { "title": "Area to Improve", "description": "Actionable advice with an example" }
      ]
    }

    Resume Text:
    ${resumeText}
    `;
    const result = await model.generateContent(prompt);
    const response =  result.response;
    const text = response.text();
    
    
    // Clean up any potential markdown formatting from the response before parsing
    const cleanedText = text.replace(/```json\n?/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanedText);
};

module.exports = { analyzeResumeWithGemini };
