import React from "react";

const leftMenu =()=>{
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

export default leftMenu;