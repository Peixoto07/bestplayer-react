import { useState, useEffect } from "react";
const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
}
const calcularTotalPontos = (pontuacao) => {
    const { gols, assistencia, desarme, defesa } = pontuacao;
    return parseInt(gols) * 3 + parseInt(assistencia) * 2 + parseInt(desarme) + parseInt(defesa);
};

 export const useJogadores = () => {
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

    const excluirJogador = (id) => {
        const novosJogadores = jogadores.filter(jogador => jogador.id !== id);
        setJogadores(novosJogadores);
        localStorage.setItem('jogadores', JSON.stringify(novosJogadores));
    };
    

      const atualizaJogador = (id, novoJogador) => {
        const novosJogadores = jogadores.map(jogador => {
            if (jogador.id === id) {
                return novoJogador;
            }
            return jogador;
        });
    
        setJogadores(novosJogadores);
        localStorage.setItem('jogadores', JSON.stringify(novosJogadores));
    };
    
    return { jogadores, atualizaJogador, adicionarJogador,excluirJogador};
};


