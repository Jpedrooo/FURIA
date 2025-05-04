
import axios from "axios";

const apiKey = "APIKEY";
const apiUrl = "https://api.openai.com/v1/chat/completions";

export async function askOpenAI(chatHistory) {
  try {
    const response = await axios.post(
      apiUrl,
      {
        model: "gpt-3.5-turbo",
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

