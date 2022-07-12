import { createContext, useState } from "react";

export  const ToggleContext = createContext();

export function ToggleProvider({ children }) {
    const [light, setLight] = useState('Off');
    const handleBulbToggle = () => {
        setLight(light ==='Off' ? 'On' : 'Off');
    }

    const [shipFly, setShipFly] =useState('');
    const handleShipToggle = () => {
        setShipFly(shipFly === 'Fly'  ? 'Return' : 'Fly');
    }

    const [menuMove, setMenuMove] =useState('');
    const handleMenuToggle = () => {
        setMenuMove(menuMove === 'Up'  ? 'Down' : 'Up');
    }


    
    return (
        <ToggleContext.Provider value={{light, setLight, handleBulbToggle, shipFly, handleShipToggle, menuMove, handleMenuToggle }}>
            {children}
        </ToggleContext.Provider>
    );
}