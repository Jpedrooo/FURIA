
import Furia from '../../assets/logofuria.png'
import './style.css'
import ChatCard from '../ChatBotCard'
import Sidebar from '../ChatLegendaCard/LegendaCard'
import Furia2 from '../../assets/logoFuria2.png'
import { useNavigate } from "react-router-dom";



function Chatpage(){



    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate("/"); 
      };

    return(
        
        <div className='containerr'>
             <img src={Furia} alt="" className='furia-logoo'/>
             <h1 className='titulo11'>CHATBOT</h1>
             <img src={Furia2} alt="" className='furia-logoo2' onClick={handleVoltar} style={{ cursor: "pointer" }}/>
             
             
             
             
             <ChatCard/>
             <Sidebar />
             

           

        </div>
    )
}

export default Chatpage