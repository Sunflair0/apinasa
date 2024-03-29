import { useToggleContext } from "../../hooks/useToggleContext";
import * as AiIcons from "react-icons/ai";

export default function TourguideLight() {
  const { islight, handleBulbToggle } = useToggleContext();

  return (
    <>
      <div className={`bulb${islight}`}
        onClick={handleBulbToggle} >
        <AiIcons.AiOutlineBulb />
      </div>
    </>
  );
}