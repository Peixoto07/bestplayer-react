/* eslint-disable react/prop-types */
import { useState } from 'react';
import useGame from "../hooks/useGame";
import useUsuarios from "../hooks/useUsuarios";
import './TimeContainer.css'

const TimeContainer = () => {
    const { renderTimesOuJogadores, jogadoresSelecionados, handleCheckboxChange, times, setJogadoresSelecionados } = useGame();
    const { usuarios } = useUsuarios();
    const [marcarTodos, setMarcarTodos] = useState(false);


    const handleMarcarTodos = (event) => {
        setMarcarTodos(event.target.checked);
        if (event.target.checked) {
            const usuariosSelecionados = [...usuarios];
            setJogadoresSelecionados(usuariosSelecionados);
        } else {
            setJogadoresSelecionados([]);
        }
    };

    return (
        <>
            {renderTimesOuJogadores === "jogadores" ? (
                <div className='jogadoresContainer'>
                    <div className='checkboxAll'>
                        <label>Selecionados ({jogadoresSelecionados.length})</label>
                        <div>
                            <label>
                                Todos
                            </label>
                            <input
                                type="checkbox"
                                id='chk'
                                checked={marcarTodos}
                                onChange={handleMarcarTodos}
                            />
                            <label htmlFor="chk" className='switch'>
                                <span className='slider'></span>
                            </label>
                        </div>

                    </div>
                    <ul className='listContainer'>
                        {usuarios.map((usuario, index) => (
                            <li
                                key={index}>
                                <div className="divNameList">
                                    <strong>{usuario.nome}</strong>
                                </div>
                                <div>
                                    <input
                                       
                                        type="checkbox"
                                        checked={jogadoresSelecionados.includes(usuario)}
                                        onChange={(event) => handleCheckboxChange(event, usuario)}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="timesContainer">
                    {times.map((jogadoresDoTime, index) => (
                        <div key={index}>
                            <h3>Time {index + 1}</h3>
                            <ul>
                                {jogadoresDoTime.map((jogador, jogadorIndex) => (
                                    <li key={jogadorIndex}>{jogador.nome}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default TimeContainer;
