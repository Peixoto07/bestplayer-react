/* eslint-disable react/prop-types */

import { createContext, useState, useEffect } from "react";
import useAlert from '../components/hooks/useAlert';

export const GameContext = createContext();



export const GameProvider = ({ children }) => {
    const { mostrarAlerta } = useAlert();
    const [numTimes, setNumTimes] = useState(0);
    const [numJogadores, setNumJogadores] = useState(0);
    const [jogadoresSelecionados, setJogadoresSelecionados] = useState([]);
    const [times, setTimes] = useState([]);
    const [renderTimesOuJogadores, setRenderTimesOuJogadores] = useState("jogadores");

    useEffect(() => {
        const savedTimes = localStorage.getItem("times");
        if (savedTimes) {
            setTimes(JSON.parse(savedTimes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("times", JSON.stringify(times));
    }, [times]);

    const handleCheckboxChange = (event, jogador) => {
        if (event.target.checked) {
            setJogadoresSelecionados([...jogadoresSelecionados, jogador]);
        } else {
            setJogadoresSelecionados(jogadoresSelecionados.filter(item => item !== jogador));
        }
    };

   const sortearTimes = () => {
        const totalJogadoresSelecionados = jogadoresSelecionados.length;
        const jogadoresPorTime = numJogadores > 0 ? numJogadores : Math.floor(totalJogadoresSelecionados / numTimes);
        const jogadoresNecessarios = jogadoresPorTime * numTimes;

        if (totalJogadoresSelecionados <= 0 || totalJogadoresSelecionados < jogadoresNecessarios || jogadoresNecessarios == 0) {
            mostrarAlerta(3000, "Selecione mais jogadores para sortear", "vermelho");
            return; 
        } else if (!numTimes) {
            mostrarAlerta(3000, "Verifique a quantidade de times", "vermelho");
            return;
        }

        const jogadoresEmbaralhados = jogadoresSelecionados.sort(() => Math.random() - 0.5);
        const timesSorteados = [];
        for (let i = 1; i <= numTimes; i++) {
            timesSorteados.push(jogadoresEmbaralhados.slice((i - 1) * jogadoresPorTime, i * jogadoresPorTime));
        }
        console.log(jogadoresNecessarios);
        setTimes(timesSorteados);
        setRenderTimesOuJogadores("times");
    };
    

  

    const value = {
        numTimes,
        setNumTimes,
        numJogadores,
        setNumJogadores,
        jogadoresSelecionados,
        handleCheckboxChange,
        times,
        setJogadoresSelecionados,
        renderTimesOuJogadores,
        setRenderTimesOuJogadores,
        sortearTimes
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};
