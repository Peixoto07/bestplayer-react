import { useContext } from "react";
import { UsuariosContext } from "../../context/UsuariosContext";

export default function useUsuarios  ()  {
    const context = useContext(UsuariosContext)
    return context;
}


