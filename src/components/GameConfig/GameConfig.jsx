/* eslint-disable no-unused-vars */
import BtnModal from "../EditPlayerModal/BtnModal";
import useAlert from "../hooks/useAlert";
import useGame from "../hooks/useGame";
import './GameConfig.css'




const GameConfig = () => {

    const {times,jogadoresSelecionados,renderTimesOuJogadores, setRenderTimesOuJogadores,sortearTimes ,setNumTimes,numTimes,setNumJogadores,numJogadores} = useGame()
    const { mostrarAlerta } = useAlert();
    const isActive = (timesOuJogadores) => {
        return timesOuJogadores === renderTimesOuJogadores ? 'activeBtn' : 'desactiveBtn';
    };

    const verifica = () => {
        return times.length == 0 ?
        mostrarAlerta(3000, "Sorteie um time para visualizar", "vermelho")
        :
        setRenderTimesOuJogadores("times");
    }
    

    return ( 
        <>
        
        <div className="containerBtnGame">
                <div>
                    <label>Nº de times</label>
                    <BtnModal setValor={setNumTimes} valor={numTimes} />
                </div>
                <div>
                    <label>Nº de jogadores</label>
                    <BtnModal setValor={setNumJogadores} valor={numJogadores} />
                </div>
            </div>

            <div className="containerNav">
                <div className="boxBtnGame">
                    <button className={isActive("jogadores")} onClick={() => setRenderTimesOuJogadores("jogadores")}>
                        jogadores
                    </button>

                    <button className={isActive("times")} onClick={() => verifica()}>
                        times
                    </button>
                </div>

                <button className="btnSortear" onClick={sortearTimes}>
                    SORTEAR
                </button>
            </div>
        </>

     );
}
 
export default GameConfig;