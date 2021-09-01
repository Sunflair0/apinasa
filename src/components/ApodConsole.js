import React, { useState } from 'react';
import ApodToday from './ApodToday';
import ApodChoose from './ApodChoose';
import ApodGimme5 from './ApodGimme5';
import ApodRange from './ApodRange';
import { Link, NavLink } from 'react-router-dom';


const ApodConsole = () => {
  const apodOptions = ["today", "choose", "gimme5", "range"];
  const [selection, setSelection] = useState("")

  return (
    <>
      <nav>
        <apodMenu>
          <ul className="content">

            <li className="apodBtn " style={{
    height: "120px",
            width: "100px",
            borderRadius: "50px",
            marginRight: "100px",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
              backgroundImage: "url(./assets/today.png)"
            }}>
              <Link className="toLeft"></Link></li>

            <li className="apodBtn" style={{
    height: "120px",
            width: "100px",
            borderRadius: "50px",
            marginRight: "100px",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
              backgroundImage: "url(./assets/choose.png)"
            }}>
              <Link></Link></li>

            <li>gggg
              <NavLink to="" className="apodBtn banner" style={{
    height: "120px",
            width: "100px",
            borderRadius: "50px",
            marginRight: "100px",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
              backgroundImage: "url(./assets/gimme.png)"
            }}></NavLink></li>

            <li className="apodBtn" style={{
    height: "120px",
            width: "100px",
            borderRadius: "50px",
            marginRight: "100px",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
              backgroundImage: "url(./assets/range.png)"
            }}>
              <Link></Link></li>

          </ul><h4 className="layerWrapper">Explore the universe and add to your personal album.</h4></apodMenu>
      </nav><p>{selection}bbbb</p>
      <div className="boxOverlay ">
        

        <p>{apodOptions === "today" && <ApodToday/> }</p>
        <p>{apodOptions === "choose" && <ApodChoose />}</p>
        <p>{apodOptions === "gimme" && <ApodGimme5 />}</p>
        <p>{apodOptions === "range" && <ApodRange />}</p>
      </div>
      <div className="toLeft ">
        <div className="banner ">

          {apodOptions.map(selectio => (
            <button className="clear apodBtn"
              type="button"
              key={selectio}

              onClick={() => setSelection(selectio)}
            >

            </button>
          ))}
        </div>
      </div>
      <div className="  ">
        <Link className="apodBtn"
          style={{height: "150px",
  width: "130px",  
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  marginRight: "5em",
  marginBottom: "5em",
  textDecoration: "none",
  transition: ".3s ease all",
            backgroundImage: "url(./assets/today.png)"
          }}>
        </Link>

        <Link className="apodBtn" to="/apodconsole"
          style={{height: "150px",
  width: "130px",  
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  marginRight: "5em",
  marginBottom: "5em",
  textDecoration: "none",
  transition: ".3s ease all",
            backgroundImage: "url(./assets/choose.png)"
          }}>
        </Link>

        <Link className="apodBtn" to="/apodconsole"
          style={{height: "150px",
  width: "130px",  
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  marginRight: "5em",
  marginBottom: "5em",
  textDecoration: "none",
  transition: ".3s ease all",
            backgroundImage: "url(./assets/gimme.png)"
          }}>
        </Link>

        <NavLink to="/apodconsole" className="apodBtn" 
          style={{

  height: "150px",
  width: "130px",  
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  marginRight: "5em",
  marginBottom: "5em",
  textDecoration: "none",
  transition: ".3s ease all",
            backgroundImage: "url(./assets/range.png)"
          }}>
        </NavLink>

      </div>
      <p>{apodOptions === "range" && <ApodRange />}</p>
      <div className="cntr ">
        <div className="boxOverlay">




        </div></div>
    </>
  );
}


export default ApodConsole;