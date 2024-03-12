
import Register from "../components/Register/Register";
import PlayerList from "../components/PlayerList/PlayerList";
import { useJogadores } from "../components/hooks/useJogadores";

const Home = () => {

    const { jogadores, adicionarJogador, excluirJogador } = useJogadores();
    return (
        <>
            <Register adicionarJogador={adicionarJogador}/>

            <PlayerList jogadores={jogadores} excluirJogador={excluirJogador}/>
        </>
    );
};

export default Home;