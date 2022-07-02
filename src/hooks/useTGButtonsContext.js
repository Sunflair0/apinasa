import { useContext } from "react";
import {TGButtonsContext} from "../TGButtonsContext";

export const useTGButtonsContext = () => {
    return useContext(TGButtonsContext);
}