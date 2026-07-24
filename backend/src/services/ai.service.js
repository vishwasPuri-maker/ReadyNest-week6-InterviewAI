const { GoogleGenAI } = require("@google/genai")
const { z } = require("zod")

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})


const interviewReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job description"),
    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question that can be asked in the interview"),
        intention: z.string().describe("The intention of the interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
    })).describe("Exactly 10 technical questions that can be asked in the interview along with their intention and how to answer them"),
    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The behavioral question that can be asked in the interview"),
        intention: z.string().describe("The intention of the interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover, what approach to take etc.")
    })).describe("Exactly 10 behavioral questions that can be asked in the interview along with their intention and how to answer them"),
    skillGaps: z.array(z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z.enum([ "low", "medium", "high" ]).describe("The severity of this skill gap")
    })).describe("List of skill gaps in the candidate's profile along with their severity"),
    preparationPlan: z.array(z.object({
        day: z.number().describe("The day number in the preparation plan, starting from 1"),
        focus: z.string().describe("The main focus of this day, e.g. data structures, system design, mock interviews etc."),
        tasks: z.array(z.string()).describe("List of 3 tasks to be done on this day")
    })).describe("A day-wise preparation plan. 14 days if strong, 21 days if average, 30 days if weak."),
})

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {


    const prompt = `
                            Generate an interview report.

                            Return ONLY valid JSON.

                            Do not include candidate_name,
                            summary,
                            recommendation,
                            or any extra fields.

                            The JSON MUST exactly follow the provided response schema.

                            Resume: ${resume}
                            Self Description: ${selfDescription}
                            Job Description: ${jobDescription}
                        `

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: z.toJSONSchema(interviewReportSchema),
        }
    })
    console.log(response.text);
    return JSON.parse(response.text)


}



async function generatePdfFromHtml(htmlContent) {
    const puppeteer = await import("puppeteer")
    const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] })
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" })

    const pdfBuffer = await page.pdf({
        format: "A4", margin: {
            top: "20mm",
            bottom: "20mm",
            left: "15mm",
            right: "15mm"
        }
    })

    await browser.close()

    return pdfBuffer
}

async function generateResumePdf({ resume, selfDescription, jobDescription }) {

    const resumePdfSchema = z.object({
        html: z.string().describe("A complete, self-contained, beautifully styled HTML document for the resume. Must include inline CSS. No external links. Must be valid HTML that can be rendered and converted to PDF by puppeteer.")
    })

    const prompt = `You are an expert resume designer and technical recruiter.

You will receive three inputs:
1. Resume Text
2. Job Description
3. Candidate Self Description

Your task is to generate a single, beautifully styled HTML resume document that:
- Is tailored to the job description
- Highlights the most relevant experience and skills
- Uses a clean, professional, ATS-friendly layout
- Contains ALL styles inline (no external CSS links)
- Is self-contained and ready to be converted to PDF

Resume Text: ${resume}
Job Description: ${jobDescription}
Candidate Self Description: ${selfDescription}

Return ONLY valid JSON with a single key: "html"
The value must be a complete HTML document string starting with <!DOCTYPE html>.
Do NOT include markdown, do NOT wrap in backticks.`

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: z.toJSONSchema(resumePdfSchema),
        }
    })


    const jsonContent = JSON.parse(response.text)

    const pdfBuffer = await generatePdfFromHtml(jsonContent.html)

    return pdfBuffer

}

module.exports = { generateInterviewReport, generateResumePdf }