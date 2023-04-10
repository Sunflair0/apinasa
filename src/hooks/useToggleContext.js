import { useContext } from "react";
import {ToggleContext} from "../context/ToggleContext";

export const useToggleContext = () => {
    return useContext(ToggleContext);
}