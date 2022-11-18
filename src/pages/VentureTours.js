import React, { useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { useEffect } from "react";
import useAPI from "../hooks/useAPI";
import {tours} from "../hooks/useAPI";
import { NavbarData } from "../components/Navbar/NavbarData";

export default function VentureTours() {
  const [ventures, setVentures] = useState(false)
  const { tours: apiVentureTours } = useAPI();

  useEffect(() => {
    async function call() {
      // const res = await apiVentureTours
      // (`http://localhost:3000/api/ventures/tour/all`);
      // if (!res.success) {
      //   return console.error(res.error);
      // } console.log(res);
      // setVentures(res.data);
    }
    call();
  }, [apiVentureTours]);

  return (
    <>
      <div className="content_flexbox">
        <div className="venture-menu">
          <Link to="#" className="menu-bars">
          </Link>
        </div>
        <ul className="venture-menu-items">
          <li className="venture-toggle">
            <Link to="#" className="menu-bars"></Link>
          </li>
          {
          NavbarData.map((item, index) => {
            return (
              <li key={index} ><img alt="menu2" src={item.icon} />

                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="tourguide" style={{marginTop: '20%', left: '20%'}}></div>  
       
        <Link to=':addOnsID'>Add Ons</Link>
      
      <Outlet />
      </div>
    </>
  );
}