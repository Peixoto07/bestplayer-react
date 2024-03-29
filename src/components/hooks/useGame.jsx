import { useContext } from "react";
import { GameContext } from '../../context/GameContext'

export default function useGame  ()  {
    const context = useContext(GameContext)
    return context;
}