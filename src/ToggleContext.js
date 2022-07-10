import { createContext, useState } from "react";

export  const ToggleContext = createContext();

export function ToggleProvider({ children }) {
    const [light, setLight] = useState('Off');
    const handleBulbToggle = () => {
        setLight(light ==='Off' ? 'On' : 'Off');
    }

    const [shipFly, setShipFly] =useState("");
    const handleMenuToggle = () => {
        setShipFly(shipFly  ? 'Fly' : 'Return');
    }
    
    return (
        <ToggleContext.Provider value={{light, setLight, handleBulbToggle, shipFly, handleMenuToggle }}>
            {children}
        </ToggleContext.Provider>
    );
}