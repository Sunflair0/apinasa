import { useToggleContext } from "../hooks/useToggleContext";


const Logo = () => {
  const { shipFly, handleShipToggle } = useToggleContext();
  return (
    <div className={`ship_${shipFly}`}
          onClick={handleShipToggle}
      style={{
        marginTop: "30px",
        marginBottom: "-20px",
        height: "125px",
        width: "125px",
        backgroundImage: "url(./assets/sh.png)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer'
      }}  >
    </div>
  )
}
export default (Logo);
