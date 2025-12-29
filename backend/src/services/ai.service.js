import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_KEY,   
});



export async function main(code) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    systeminstructions: `You are a code reviewer.
    first you check code is good or bad, then you check the error,
    then you do the constructive crtisim and a list of problem in code and then so provide the solution for each error and in last give a 
    better version of code  
    try to give clean and best code.`,
    contents: code,
  });

  return response.text;
}
export default main;