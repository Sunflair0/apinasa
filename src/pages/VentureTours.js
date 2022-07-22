import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useAPI from "../hooks/useAPI";
import {tours} from "../hooks/useAPI";
import { NavbarData } from "../components/NavbarData";
import { Outlet } from "react-router-dom";

export default function VentureTours() {
  const [ventures, setVentures] = useState(false)
  const { tours: apiVentureTours } = useAPI();

  useEffect(() => {
    async function call() {
      const res = await apiVentureTours(`http://localhost:3006/api/ventures/tour/all`);
      if (!res.success) {
        return console.error(res.error);
      } console.log(res);
      setVentures(res.data);
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
              <li key={index} ><img alt="right sidebar with planets as index holders" src={item.icon} />

                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="tourguide"></div>  
        <Link to=':tourId'>TOURS</Link>
        <Link to=':addOnsID'>Add Ons</Link>
      
      <Outlet />
      </div>
    </>
  );
}