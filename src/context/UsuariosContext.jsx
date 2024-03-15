/* eslint-disable react/prop-types */
import{ createContext, useState, useEffect } from "react";

export const UsuariosContext = createContext();

const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9);
};

export const UsuariosProvider = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);
    const calcularTotalPontos = (pontuacao) => {
        const { gols, assistencia, desarme, defesa } = pontuacao;
        return parseInt(gols) * 3 + parseInt(assistencia) * 2 + parseInt(desarme) + parseInt(defesa);
    };


    useEffect(() => {
        const usuariosArmazenados = localStorage.getItem('usuarios');
        if (usuariosArmazenados) {
            setUsuarios(JSON.parse(usuariosArmazenados));
        }
    }, []);

    const adicionarUsuario = (nome) => {
        const pontuacao = {
            gols: '0',
            assistencia: '0',
            desarme: '0',
            defesa: '0'
        };

        const novoUsuario = {
            id: generateRandomId(),
            nome: nome,
            pontuacao: pontuacao,
            totalPontos: calcularTotalPontos(pontuacao)
        };

        setUsuarios([...usuarios, novoUsuario]);
        localStorage.setItem('usuarios', JSON.stringify([...usuarios, novoUsuario]));
    };

    const excluirUsuario = (id) => {
        const novosUsuarios = usuarios.filter(usuario => usuario.id !== id);
        setUsuarios(novosUsuarios);
        localStorage.setItem('usuarios', JSON.stringify(novosUsuarios));
    };

    const atualizarUsuario = (id, novoUsuario) => {
        const novosUsuarios = usuarios.map(usuario => {
            if (usuario.id === id) {
                return novoUsuario;
            }
            return usuario;
        });
    
        setUsuarios(novosUsuarios);
        localStorage.setItem('usuarios', JSON.stringify(novosUsuarios));
    };

    return (
        <UsuariosContext.Provider value={{ usuarios, adicionarUsuario, excluirUsuario, atualizarUsuario }}>
            {children}
        </UsuariosContext.Provider>
    );
};
