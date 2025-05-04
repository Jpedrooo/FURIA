
import axios from "axios";

const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/chat/completions";

export async function askOpenAI(chatHistory) {
  try {
    const response = await axios.post(
      apiUrl,
      {
        model: "gpt-4o",
        messages: chatHistory,
        temperature: 0.7,
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiMessage = response.data.choices[0].message.content.trim();
    return aiMessage;
  } catch (error) {
    console.error("Erro ao consultar OpenAI:", error?.response?.data || error.message);
    return "Tive um problema para acessar a IA agora. 😥 Tente novamente mais tarde!";
  }
}

