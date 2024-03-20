import useUsuarios from "../hooks/useUsuarios";
import './UserIcon.css';
import { RiVipCrownFill } from "react-icons/ri";
import { PiUserCircleFill } from "react-icons/pi";

const UserIcon = () => {
    const { usuariosOrdenados } = useUsuarios();
    const primeirosTresUsuarios = usuariosOrdenados.slice(0, 3);

    return (
        <div className="userContainer">
            {primeirosTresUsuarios.map((usuario, index) => (
                <div key={index} className="userBox">
                    <div className="iconBox">
                        {index === 0 && <RiVipCrownFill className="iconCrown" />}
                        <PiUserCircleFill className="iconUser" size={index === 0 ? "8rem" : undefined} />
                    </div>
                    <div className="nameUser">
                        {usuario.nome}
                    </div>
                    <div className={`totalPontos ${index === 0 ? 'bgRed' : ''}`}>
                        Pts: <span>{usuario.totalPontos}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserIcon;
