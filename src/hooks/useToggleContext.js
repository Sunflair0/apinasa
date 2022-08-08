import { useContext } from "react";
import {ToggleContext} from "../ToggleContext";

export const useToggleContext = () => {
    return useContext(ToggleContext);
}