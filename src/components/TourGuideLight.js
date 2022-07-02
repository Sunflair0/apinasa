import { useTGButtonsContext } from "../hooks/useTGButtonsContext";
import * as AiIcons from "react-icons/ai";

function TourGuideLight() {
  const { light, handleBulbToggle } = useTGButtonsContext();

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