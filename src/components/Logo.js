import { useToggleContext } from "../hooks/useToggleContext";


const Logo = () => {
  const { shipFly, handleMenuToggle } = useToggleContext();
  return (
    <div className={`ship_${shipFly}`}
      style={{
        marginTop: "30px",
        marginBottom: "-20px",
        height: "150px",
        width: "150px",
        backgroundImage: "url(./assets/sh.png)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} onClick={handleMenuToggle} 
      alt="spaceship logo">
    </div>
  )
}
export default Logo;
