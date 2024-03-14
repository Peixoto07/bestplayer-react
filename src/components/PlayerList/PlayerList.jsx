/* eslint-disable react/prop-types */
import './PlayerList.css'
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { GiSoccerKick } from "react-icons/gi";
import EditPlayerModal from "../EditPlayerModal/EditPlayerModal";
import { useState } from 'react';




const PlayerList = ({ jogadores, excluirJogador,atualizaJogador,handleMostrarAlerta  }) => {

  const [modalStatus, setModalStatus] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleEditClick = (jogador) => {
    const playerData = jogador;
    setSelectedPlayer(playerData); 
    handleModal();
  };

  const handleModal = () => {
    setModalStatus((modalStatus) => !modalStatus);

  };


  const textoListaCheia = () => {
    return (
      <div className='textoLista'>
        <h3>Jogadores</h3>
        <span className='quantidadeJogador'>{jogadores.length}</span>
      </div>
    )
  }

  const textoListaVazia = () => {
    return (
      <div>
        <h3>Cadastre um jogador</h3>
      </div>
    )
  }

  return (
    <div className="listContainer">

      {jogadores.length === 0 ? textoListaVazia() : textoListaCheia()}

      {jogadores.length === 0 ? (
        <GiSoccerKick className='soccerIcon' />
      ) : (
        <ul>
          {jogadores.map((jogador, index) => (
            <li key={index}>
              <div className="divNameList">
                <strong>{jogador.nome}</strong>
              </div>
              <div className="divIcons">
                <TiDelete onClick={() => excluirJogador(jogador.id)} className="iconList" />
                <MdEdit onClick={() => handleEditClick(jogador)} className="iconList" />

              </div>
            </li>
          ))}
        </ul>
      )}
      {modalStatus === true ? (
        <EditPlayerModal
        handleMostrarAlerta ={handleMostrarAlerta }
          jogadorSelecionado={selectedPlayer}
          statusModal={handleModal}
          atualizaJogador={atualizaJogador}
        />
      ) : ("")}
    </div>

  );
};

export default PlayerList;

