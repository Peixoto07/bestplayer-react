import { useState, useEffect } from "react";
const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
}
const calcularTotalPontos = (pontuacao) => {
    const { gols, assistencia, desarme, defesa } = pontuacao;
    return parseInt(gols) * 3 + parseInt(assistencia) * 2 + parseInt(desarme) + parseInt(defesa);
};

const useJogadores = () => {
    const [jogadores, setJogadores] = useState([]);

    useEffect(() => {
        const jogadoresArmazenados = localStorage.getItem('jogadores');
        if (jogadoresArmazenados) {
            setJogadores(JSON.parse(jogadoresArmazenados));
        }
    }, []);

    const adicionarJogador = (nome) => {
        const pontuacao = {
            gols: '0',
            assistencia: '0',
            desarme: '0',
            defesa: '0'
        };

        const novoJogador = {
            id: generateRandomId(),
            nome: nome,
            pontuacao: pontuacao,
            totalPontos: calcularTotalPontos(pontuacao)
        };

        setJogadores([...jogadores, novoJogador]);
        localStorage.setItem('jogadores', JSON.stringify([...jogadores, novoJogador]));
    };

    const excluirJogador = (index) => {
        const novosJogadores = [...jogadores];
        novosJogadores.splice(index, 1);
        setJogadores(novosJogadores);
        localStorage.setItem('jogadores', JSON.stringify(novosJogadores));
      };
    return { jogadores, adicionarJogador,excluirJogador};
};

export default useJogadores;
