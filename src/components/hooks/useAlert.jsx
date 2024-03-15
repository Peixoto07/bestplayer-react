import { useContext } from "react";
import { AlertContext } from "../../context/AlertContext";

export default function useAlert ()  {
    const context = useContext(AlertContext);
    return context;
}





