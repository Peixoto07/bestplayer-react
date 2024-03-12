import './TabBar.css'
import { FaRankingStar } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";
import { GiSoccerField } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom';




const TabBar = () => {

    const location = useLocation(); //

    const isActive = (path) => {
        return location.pathname === path ? 'activeButton' : 'desactiveButton';
    };

    return (
        <div className='tabContainer'>
            <Link  className={isActive('/ranking')} to="/ranking">
                <FaRankingStar />
            </Link>

            <Link  className={isActive('/')} to="/">
                <HiUserAdd />
            </Link>

            <Link  className={isActive('/game')} to="/game">
                <GiSoccerField />
            </Link>
        </div>
    );
}

export default TabBar;
