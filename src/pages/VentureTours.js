import React, {useState} from "react";
import {Link} from "react-router-dom";
import { useFetch, useEffect } from "react";



export default function VentureTours() {
  const [ventures, setVentures] = useState(false)
const { callAPI: getventures } = useFetch("GET");

useEffect(() => {
    async function call() {
      const res = await getventures(`http://localhost:3006/api/ventures/tour/all`);
      if (!res.success) {
        return console.error(res.error);
        
      }console.log(res);
      setVentures(res.data);
  }
    call();
  }, [getventures]);


  return (
    <>

   
        <div className="venture-menu">
          <Link to="#" className="menu-bars">
           
          </Link>
        </div>
       
          <ul className="venture-menu-items">
            <li className="venture-toggle">
              <Link to="#" className="menu-bars"></Link>
            </li>
            {ventures.map((item, index) => {
              return (
                <li key={index} ><img alt="right sidebar with planets as index holders" src={item.icon}/>

                  <Link to={item.path}>
                   
                    <span>{item.title}</span>
                    
                  </Link>
                </li>
              );
            })}
          </ul>
    </>
  );
}