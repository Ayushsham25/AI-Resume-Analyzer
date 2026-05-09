const pdfParse = require('pdf-parse');

//  handling pdf parser is not a function error 
console.log("--- DEBUG START ---");
console.log("1. Type of pdfParse:", typeof pdfParse);
console.log("2. Value of pdfParse:", pdfParse);
console.log("--- DEBUG END ---");


 const parseFunction = pdfParse.default || pdfParse;
 const { analyzeResumeWithGemini } = require('../services/gemini.js');

const analyzeResume = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

       
        // 1 extracting text from pdf
        const pdfData = await parseFunction(req.file.buffer);
        const resumeText = pdfData.text;
    
        console.log(resumeText);

        // 2 sending data to gemini

        const analysisResult = await analyzeResumeWithGemini(resumeText);

        // 3 sending the data to frontend
        console.log(analysisResult);

        res.status(200).json(analysisResult);

    }
    catch(error){
        console.error(" There was some problem while analysing your data try again later" , error.message || error );
        res.status(500).json({
            error:" failed to analyze Resume"
        });
    }
};

module.exports ={analyzeResume};