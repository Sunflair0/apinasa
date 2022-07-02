import { createContext, useState } from "react";

export  const TGButtonsContext = createContext();

export function TGButtonsProvider({ children }) {
    const [light, setLight] = useState('Off');

    const handleBulbToggle = () => {
        setLight(light ==='Off' ? 'On' : 'Off');
    }
    return (
        <TGButtonsContext.Provider value={{light, setLight, handleBulbToggle }}>
            {children}
        </TGButtonsContext.Provider>
    );
}