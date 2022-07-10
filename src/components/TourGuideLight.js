import { useToggleContext } from "../hooks/useToggleContext";
import * as AiIcons from "react-icons/ai";

function TourGuideLight() {
  const { light, handleBulbToggle } = useToggleContext();

  return (
    <>
      <div className={`bulb${light}`}
        onClick={handleBulbToggle} >
        <AiIcons.AiOutlineBulb />
      </div>
    </>
  );
}

export default (TourGuideLight);