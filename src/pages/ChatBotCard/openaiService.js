
import axios from "axios";

const apiKey = "COLOQUE AQUI A APIKEY";
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

