import OpenAI from "openai";

export const askToChatGpt = async function (req, res) {
  /**
   * 1. Create/configure OpenAI Instance
   */
  const openAIInstance = await _createOpenAIInstance();

  /**
   * 2. Let's talk to chatGPT using chat completions
   */
  try {
    const response = await openAIInstance.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
      temperature: 0.7,
      max_tokens: 500,
    });
    const repliedMessage = response.choices[0].message.content;
    res.send({ from: "chatGpt", data: repliedMessage });
  } catch (error) {
    // Report error
    console.log("Error ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const _createOpenAIInstance = async () => {
  const openai = new OpenAI({
    apiKey: process.env["CHATGPT_TOKEN"],
  });
  return openai;
};
