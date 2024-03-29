import { GameProvider } from '../context/GameContext';
import GameConfig from '../components/GameConfig/GameConfig';
import TimeContainer from '../components/TimeContainer/TimeContainer';

const Game = () => {
    
   

    return (
        
        <GameProvider>

          <GameConfig/>
          <TimeContainer/>
         
        </GameProvider>

            
    );
}

export default Game;
