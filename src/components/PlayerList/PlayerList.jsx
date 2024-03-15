/* eslint-disable react/prop-types */
import './PlayerList.css'
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { GiSoccerKick } from "react-icons/gi";
import EditPlayerModal from "../EditPlayerModal/EditPlayerModal";
import { useState } from 'react';
import useUsuarios from '../hooks/useUsuarios';




const PlayerList = () => {
  const { usuarios, excluirUsuario } = useUsuarios()
  const [modalStatus, setModalStatus] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleEditClick = (usuarios) => {
    const playerData = usuarios;
    setSelectedPlayer(playerData); 
    handleModal();
  };

  const handleModal = () => {
    setModalStatus((modalStatus) => !modalStatus);

  };


  const textoListaCheia = () => {
    return (
      <div className='textoLista'>
        <h3>jogadores</h3>
        <span className='quantidadeJogador'>{usuarios.length}</span>
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

      {usuarios.length === 0 ? textoListaVazia() : textoListaCheia()}

      {usuarios.length === 0 ? (
        <GiSoccerKick className='soccerIcon' />
      ) : (
        <ul>
          {usuarios.map((usuarios, index) => (
            <li key={index}>
              <div className="divNameList">
                <strong>{usuarios.nome}</strong>
              </div>
              <div className="divIcons">
                <TiDelete onClick={() => excluirUsuario(usuarios.id)} className="iconList" />
                <MdEdit onClick={() => handleEditClick(usuarios)} className="iconList" />

              </div>
            </li>
          ))}
        </ul>
      )}
      {modalStatus === true ? (
        <EditPlayerModal
          jogadorSelecionado={selectedPlayer}
          statusModal={handleModal}
        
        />
      ) : ("")}
    </div>

  );
};

export default PlayerList;

