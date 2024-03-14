/* eslint-disable react/prop-types */
import { FaUserCircle } from "react-icons/fa";
import BtnModal from "./BtnModal";
import './EditPlayerModal.css'
import { useState, useEffect } from 'react';

const EditPlayerModal = ({ statusModal, jogadorSelecionado, atualizaJogador,handleMostrarAlerta  }) => {
    const [playerData, setPlayerData] = useState(null);

   

    useEffect(() => {
        if (jogadorSelecionado) {
            setPlayerData(jogadorSelecionado);
           
        }
    }, [jogadorSelecionado]);

    const toggleModal = () => {
        statusModal();
    };

  
    

    const handleSave = (id,novoJogador) => {
        atualizaJogador(id,novoJogador)
        handleMostrarAlerta (2000)
        toggleModal()


    };

    if (!playerData) {
        return null;
    }

    const handlePontuacaoChange = (campo, newValue) => {
        if (campo === 'nome') {
            setPlayerData(prevPlayerData => ({
                ...prevPlayerData,
                nome: newValue
            }));
        } else {
            setPlayerData(prevPlayerData => ({
                ...prevPlayerData,
                pontuacao: {
                    ...prevPlayerData.pontuacao,
                    [campo]: newValue
                }
            }));
        }
    };
    

    return (
        <div className="modal">
            <div className="modalContent">
                <span onClick={toggleModal} className="close">&times;</span>
                <FaUserCircle />
                <input type="text" name="nome" value={playerData.nome || ''} onChange={e=>handlePontuacaoChange('nome',e.target.value)} />
                <div className="pontuacao">
                    <div className="">
                        <label>Gols</label>
                        <BtnModal setValor={newValue => handlePontuacaoChange('gols', newValue)} valor={playerData.pontuacao.gols} />
                    </div>

                    <div>
                        <label>Assistências</label>
                        <BtnModal setValor={newValue => handlePontuacaoChange('assistencia', newValue)} valor={playerData.pontuacao.assistencia} />
                    </div>

                    <div>
                        <label>Defesas</label>
                        <BtnModal setValor={newValue => handlePontuacaoChange('defesa', newValue)} valor={playerData.pontuacao.defesa} />
                    </div>

                    <div>
                        <label>Desarmes</label>
                        <BtnModal setValor={newValue => handlePontuacaoChange('desarme', newValue)} valor={playerData.pontuacao.desarme} />
                    </div>
                </div>
                <div className="divBtn">
                <button className="btnCancelar" onClick={toggleModal}>Cancelar</button>
                <button className="btnSalvar" onClick={() => handleSave(playerData.id, playerData)}>Salvar</button>

                </div>

            </div>
        </div>
    );
};

export default EditPlayerModal;
