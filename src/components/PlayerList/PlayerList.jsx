/* eslint-disable react/prop-types */
import './PlayerList.css'
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";


const PlayerList = ({ jogadores, excluirJogador }) => {

  
    return (
    <div className="listContainer">
     { console.log(jogadores)}
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
  );
};

export default PlayerList;

