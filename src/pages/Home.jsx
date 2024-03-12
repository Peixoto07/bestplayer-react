import { useState } from "react";
import useJogadores from "../components/hooks/useJogadores";
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import './Home.css'

const Home = () => {
    const { jogadores, adicionarJogador,excluirJogador } = useJogadores();
    const [nome, setNome] = useState('');

    const handleInputChange = (event) => {
        setNome(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nome.trim() !== '') {
            adicionarJogador(nome);
            setNome('');
        }
    };

    return (
        <>
            <form className="formContainer" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nome}
                    onChange={handleInputChange}
                    placeholder="Digite o nome do jogador..."
                />
                <button type="submit">SALVAR</button>
            </form>

            <div className="listContainer" >
                <h2>Lista de Jogadores</h2>
                <ul>
                    {jogadores.map((jogador, index) => (
                        <li key={index}>
                            <div className="divNameList">
                                <strong>{jogador.nome}</strong>
                            </div>
                           
                            <div className="divIcons">
                            <TiDelete onClick={() => excluirJogador(index)} className="iconList" />

                            <MdEdit className="iconList" />
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Home;