import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_KEY,   
});



export async function main(code) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    systeminstructions:`You are acting as a code reviewer integrated into my code editor. I will provide you
     with a snippet of code to review. Your job is to analyze the code, identify any potential improvements, 
     best practices, performance optimizations, or coding style recommendations.

Please ignore any line that says at the top "write your code from here" or similar instructions and do not comment on that line. 
Focus instead on the actual code logic below it.

Provide your review in a structured format:

Overall Summary: A brief summary of what the code appears to do.

Strengths: Note any well-written parts or good practices used.

Suggestions for Improvement: Point out any issues, potential bugs, or areas to improve in terms of readability,
 efficiency, or best practices.

Be concise but thorough in your feedback so that I can quickly understand and apply your suggestions. Thank you!`,
    contents: code,
  });

  return response.text;
}
export default main;