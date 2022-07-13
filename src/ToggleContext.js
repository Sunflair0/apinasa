import { createContext, useState } from "react";

export  const ToggleContext = createContext();

export function ToggleProvider({ children }) {
    const [light, setLight] = useState('Off');
    const handleBulbToggle = () => {
        setLight(light ==='Off' ? 'On' : 'Off');
    }
  
    return (
        <ToggleContext.Provider value={{light, setLight, handleBulbToggle, }}>
            {children}
        </ToggleContext.Provider>
    );
}