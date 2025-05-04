import React, { useState, useRef, useEffect } from "react";
import "./ChatCard.css";
import BotIcon from "./bot-icon.svg";
import UserIcon from "./user-icon.svg";
import { useLocation } from "react-router-dom";
import Fuse from "fuse.js";
import botResponses from "./botResponse";
import { askOpenAI } from "./openaiService";
import Sidebar from "../ChatLegendaCard/LegendaCard";

function formatMessage(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) =>
    urlRegex.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

const fuse = new Fuse(botResponses, {
  keys: ["question"],
  threshold: 0.4,
});

const ChatCard = () => {
  const location = useLocation();
  const userName = location.state?.nome || "Usuário";

  const [mensagens, setMensagens] = useState([
    {
      sender: "bot",
      text: `Fala ${userName}! O que você quer saber da FURIA hoje?`,
    },
  ]);
  const [textoInput, setTextoInput] = useState("");
  const [botDigitando, setBotDigitando] = useState(false);
  const [historicoChat, setHistoricoChat] = useState([
    {
      role: "system",
      content: `Você é um bot da FURIA Esports, especialista em CS:GO. Responda de forma curta, divertida, com emoção e muitos emojis, sem imendar outras perguntas. Fale apenas sobre Counter-Strike, a FURIA, seus jogadores, partidas e história. Use gírias de CS. Não fale sobre outros times ou assuntos. Se o usuário perguntar sobre o placar do último jogo, line-up atual, próximos jogos, responda com: "Você pode conferir isso aqui: https://www.hltv.org/team/8297/furia ou verificar se exite uma mensagem pronta, no canto superior esquedo da tela!". responda tembem se você está tendo acesso as perguntas e respostas anteriores`,
    },
  ]);

  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (textoInput.trim() === "") return;
  
    const userMessage = { sender: "user", text: textoInput };
    setMensagens((prev) => [...prev, userMessage]);
    setTextoInput("");
  
    setBotDigitando(true);
    setMensagens((prev) => [...prev, { sender: "bot", text: "Digitando..." }]);
  
    setTimeout(async () => {
      setBotDigitando(false);
  
      const result = fuse.search(textoInput.toLowerCase());
      let botResponse = "";
  
      if (result.length > 0) {
        botResponse = result[0].item.response;
      
        // ATUALIZA o histórico mesmo com resposta pronta
        setHistoricoChat((prev) => [
          ...prev,
          { role: "user", content: textoInput },
          { role: "assistant", content: botResponse },
        ]);
      } else {
        const updatedHistory = [
          ...historicoChat,
          { role: "user", content: textoInput },
        ];
      
        botResponse = await askOpenAI(updatedHistory);
      
        setHistoricoChat((prev) => [
          ...prev,
          { role: "user", content: textoInput },
          { role: "assistant", content: botResponse },
        ]);
      }
  
      // Atualiza a lista de mensagens do chat visível
      setMensagens((prev) => {
        const novas = [...prev];
        novas.pop(); // Remove "Digitando..."
        return [...novas, { sender: "bot", text: botResponse }];
      });
    }, 1500);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [mensagens]);

  return (
    <div className="chat-card">
      <Sidebar />

      <h2 className="subtitulo">Chat</h2>
      <div className="chat-messages">
        {mensagens.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.sender === "bot" ? "bot-message" : "user-message"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="avatar bot-avatar">
                <img src={BotIcon} alt="Bot" />
              </div>
            )}
            <div className="message-content">
              {msg.text === "Digitando..." ? (
                <>
                  {msg.text}
                  <span className="typing-dots">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </span>
                </>
              ) : (
                formatMessage(msg.text)
              )}
            </div>
            {msg.sender === "user" && (
              <div className="avatar user-avatar">
                <img src={UserIcon} alt="Usuário" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          className="chat-input"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="chat-send-button" onClick={handleSend}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatCard;
