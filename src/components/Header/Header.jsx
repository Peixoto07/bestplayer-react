import './Header.css'
import { FiMenu } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";


const Header = () => {
    return (

        <header className='headerContainer'>
            <FiMenu className='icon'/>
            <h3>BestPlayer</h3>
            <FaCircleUser className='icon' />
        </header>
     );
}
 
export default Header;