
import Register from "../components/Register/Register";
import PlayerList from "../components/PlayerList/PlayerList";
import { useJogadores } from "../components/hooks/useJogadores";
import Alert from "../components/Alert/Alert";
import { useState } from "react";

const Home = () => {
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const { jogadores, adicionarJogador, atualizaJogador, excluirJogador } = useJogadores();
    
    const handleMostrarAlerta = (duracao) => {
        setMostrarAlerta(true);
        setTimeout(() => {
          setMostrarAlerta(false);
        }, duracao);
      };
    
    return (
        <>
            <Alert mostrar={mostrarAlerta} cor="verde">
                jogador atualizado
            </Alert>
            <Register adicionarJogador={adicionarJogador} />

            <PlayerList handleMostrarAlerta ={handleMostrarAlerta} jogadores={jogadores} atualizaJogador={atualizaJogador} excluirJogador={excluirJogador} />
        </>
    );
};

export default Home;