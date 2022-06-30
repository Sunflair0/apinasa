import React, { useState } from 'react'
import * as AiIcons from "react-icons/ai";

export const TourGuideLight = () => {
    const [light, setLight] = useState(false);

    const handleClick = () => {
      setLight(!light);
    }

  return (
    <>
    <div className="bulb"><AiIcons.AiOutlineBulb /></div>
    </>
  )
}

export default (TourGuideLight);
