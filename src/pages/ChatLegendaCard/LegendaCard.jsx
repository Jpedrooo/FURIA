import React, { useState } from "react";
import botResponses from "../ChatBotCard/botResponse";
import "./Sidebar.css";

const Sidebar = () => {
  const [mostrarSidebar, setMostrarSidebar] = useState(false);

  const toggleSidebar = () => {
    setMostrarSidebar((prev) => !prev);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${mostrarSidebar ? "ativa" : ""}`}>
        <h3 className="perguntas">❓ Perguntas prontas</h3>
        <ul>
          {botResponses.map((item, index) => (
            <li key={index}>✦ {item.question}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

