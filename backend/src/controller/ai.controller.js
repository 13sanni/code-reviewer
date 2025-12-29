import main from "../services/ai.service.js";

export async function getAIResponse(req, res) {
  try {
    const { prompt } = req.body;   

    const result = await main(prompt);

    res.json({
      success: true,
      response: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
}
