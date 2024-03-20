import useUsuarios from "../hooks/useUsuarios";
import './RankingList.css'
const RankingList = () => {

  const { usuariosOrdenados } = useUsuarios()
  return (
    <div className="rankingContainer" >
      {usuariosOrdenados.map((usuario, index) => (

        <div key={index} className={`cardRanking ${index === 0 ? 'borderRed' : ''}`}>

          <div className="boxInfoItem">

            <div className="colocacao">{index + 1}</div>
            <div className="infoItem" >
              <div className="nomeInfoItem">{usuario.nome}</div>
              <div className={`totalPontos ${index === 0 ? 'bgRed' : ''}`} 
              >Pts: <span>{usuario.totalPontos}</span>
              </div>
            </div>

          </div>
          <div className="boxPontuacao">

            <div className="itemPontuacao">
              <div>{usuario.pontuacao.gols}</div>
              <span>Gols</span>
            </div>

            <div className="itemPontuacao">
              <div> {usuario.pontuacao.assistencia}</div>
              <span>Assist</span>
            </div>

            <div className="itemPontuacao">
              <div>{usuario.pontuacao.defesa}</div>
              <span>Def</span>
            </div>

            <div className="itemPontuacao">
              <div>{usuario.pontuacao.desarme}</div>
              <span>Des</span>
            </div>
          </div>

        </div>


      ))}
    </div>
  );
}

export default RankingList;