import './TabBar.css';
import { FaRankingStar } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";
import { GiSoccerField } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom';
import useUsuarios from '../hooks/useUsuarios';
import useAlert from '../hooks/useAlert';

const TabBar = () => {
    const location = useLocation();
    const { usuarios } = useUsuarios();
    const { mostrarAlerta } = useAlert();
   
    



    const isActive = (path) => {
        return location.pathname === path ? 'activeButton' : 'desactiveButton';
    };

    const handleRankingClick = (e) => {
        if (usuarios.length <= 2) {
            e.preventDefault();
            mostrarAlerta(3000, "cadastre no minimo 3 jogadores", "vermelho");
        }
    };

    return (
        <div className='tabContainer'>
            <Link className={isActive('/ranking')} to="/ranking" onClick={handleRankingClick}>
                <FaRankingStar />
            </Link>

            <Link className={isActive('/')} to="/">
                <HiUserAdd />
            </Link>

            <Link className={isActive('/game')} to="/game"  onClick={handleRankingClick}>
                <GiSoccerField />
            </Link>
        </div>
    );
}

export default TabBar;
