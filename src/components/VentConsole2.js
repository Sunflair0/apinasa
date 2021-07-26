<<<<<<< HEAD
=======
import React, { useState } from "react";
import VentureInfo2 from "./VentureInfo2";
import { Ventures } from "./extension/Data";
export default function VentConsole2() {
  const [active, setActive] = useState("Form");
  const locations = ["Sun", "Mercury", "Earth", "Moon", "Mars", "Ganymede","Callisto","Titan","Mimas","Uranus","Pluto"];
  return (
    <>
      <li>FORM</li>
      {locations.map((val, idx) => (
        <li onClick={() => setActive(idx)}>{val}</li>
      ))}
      {active !== "Form" && <VentureInfo2 item={Ventures[active]} />}
    </>
  );
}
>>>>>>> css-fix-second-menu
