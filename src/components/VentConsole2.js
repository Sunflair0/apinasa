import React from "react";
import VentureInfo2 from "./VentureInfo2";
Import {Ventures} from "./extension/Data";

export default function VentConsole2() { 
 const [active, setActive] = useState("Form");
<>

  <li onclick={() => setActive ("Sun")} />
  <li onclick={() => setActive ("Mercury")} />
  <li onclick={() => setActive ("Earth")} />
  <li onclick={() => setActive ("Moon")} />
  <li onclick={() => setActive ("Mars")} />
  <li onclick={() => setActive ("Ganymede")} />
  <li onclick={() => setActive ("Callisto")} />
  <li onclick={() => setActive ("Titan")} />
  <li onclick={() => setActive ("Mimas")} />
  <li onclick={() => setActive ("Uranus")} />
  <li onclick={() => setActive ("Pluto")} />
  <li onclick={() => setActive ("Form")} />
 
          {setActive === "Mercury"  && <VentureInfo2 data={Data} index={}/>}
          {setActive === "Earth"  && <VentureInfo2 data={Data} index={}/>}
          {setActive === "Moon"  && <VentureInfo2 data={Data} index={}/>}
          {setActive === "Mars"  && <VentureInfo2 data={Data} index={}/>}
          {setActive === "Ganymede"  && <VentureInfo2 data={Data} index={}/>}
          {setActive === "Callisto"  && <VentureInfo2 data={Data} index={}/>}
          {setActive === "Titan"  && <VentureInfo2 data={Data} index={}/>}
          {setActive === "Mimas"  && <VentureInfo2 data={Data} index={}/>}
          {setActive === "Uranus"  && <VentureInfo2 data={Data} index={}/>}
          {setActive === "Pluto"  && <VentureInfo2 data={Data} index={}/>}
 </>

    return (
        <div className="ventConsole">
          
          {active === "Sun"  && <VentureInfo2 data={Data} index={}/>}
          {active === "Mercury"  && <VentureInfo2 data={Data} index={}/>}
          {active === "Earth"  && <VentureInfo2 data={Data} index={}/>}
          {active === "Moon"  && <VentureInfo2 data={Data} index={}/>}
          {active === "Mars"  && <VentureInfo2 data={Data} index={}/>}
          {active === "Ganymede"  && <VentureInfo2 data={Data} index={}/>}
          {active === "Callisto"  && <VentureInfo2 data={Data} index={}/>}
          {active === "Titan"  && <VentureInfo2 data={Data} index={}/>}
          {active === "Mimas"  && <VentureInfo2 data={Data} index={}/>}
          {active === "Uranus"  && <VentureInfo2 data={Data} index={}/>}
          {active === "Pluto"  && <VentureInfo2 data={Data} index={}/>}
         
         
        </div>
    );
    }
    