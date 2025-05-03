import Furia2 from "../../assets/logoFuria2.png";
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");

  const handleEntrar = () => {
    if (nome.trim() === "") return;
    navigate("/chat", { state: { nome } });
  };

  return (
    <div className="home-wrapper">
      <img src={Furia2} alt="Logo FURIA" className="furia-logo2" />

      <div className="card">
        <form className="join">
          <h1 className="titulo1">Entrar</h1>
          <input
            type="text"
            className="nome"
            placeholder="Digite seu nome..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.preventDefault();
            }}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button type="button" className="entrar" onClick={handleEntrar}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;