import { createContext, useState } from "react";

export  const ToggleContext = createContext();

export function ToggleProvider({ children }) {
    const [islight, setIsLight] = useState('Off');
    const handleBulbToggle = () => {
        setIsLight(islight ==='Off' ? 'On' : 'Off');
    }
  
    return (
        <ToggleContext.Provider value={{islight, setIsLight, handleBulbToggle}}>
            {children}
        </ToggleContext.Provider>
    );
}