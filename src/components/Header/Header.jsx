import './Header.css'
import { FiMenu } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import useAlert from '../hooks/useAlert';
import Alert from '../Alert/Alert';


const Header = () => {

    const { alertStatus, mensagemAlerta, cor } = useAlert();
    return (
        <>
        
        
        {alertStatus && (
            <Alert cor={cor}>
                {mensagemAlerta}
            </Alert>
        )}
        <header className='headerContainer'>
            <FiMenu className='icon'/>
            <h3>BestPlayer</h3>
            <FaCircleUser className='icon' />
        </header>
        </>
     );
}
 
export default Header;