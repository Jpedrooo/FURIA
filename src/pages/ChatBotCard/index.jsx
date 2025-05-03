import React, { useState, useRef, useEffect } from "react";
import "./ChatCard.css";
import BotIcon from "./bot-icon.svg";
import UserIcon from "./user-icon.svg";
import { useLocation } from "react-router-dom";
import Fuse from "fuse.js";
import botResponses from "./botResponse";
import { askOpenAI } from "./openaiService";
import Sidebar from "../ChatLegendaCard/LegendaCard";


const fuse = new Fuse(botResponses, {
  keys: ["question"],
  threshold: 0.3,
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
      content:
        "Você é um bot da FURIA Esports, especialista em CS:GO. Responda de forma curta, divertida, cheia de emoção e com muitos emojis! Fale apenas sobre Counter-Strike, FURIA, seus jogadores, partidas e história. Use gírias de CS e Não responda sobre outros assuntos ou times.",
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
      } else {
        const updatedHistory = [
          ...historicoChat,
          { role: "user", content: textoInput },
        ];

        botResponse = await askOpenAI(updatedHistory);

        setHistoricoChat([
          ...updatedHistory,
          { role: "assistant", content: botResponse },
        ]);
      }

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
            className={`chat-message ${msg.sender === "bot" ? "bot-message" : "user-message"}`}
          >
            {msg.sender === "bot" && (
              <div className="avatar bot-avatar">
                <img src={BotIcon} alt="Bot" />
              </div>
            )}
            <div className="message-content">
              {msg.text}
              {msg.text === "Digitando..." && (
                <span className="typing-dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
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
