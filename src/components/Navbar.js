import React from 'react';
// import * as AiIcons from 'react-icons/ai';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav >        
    <ul className='menu1items'>
    {/* <AiIcons.AiFillHome style={{transform: "translateX(0px)", color:"#fff", zIndex: "10"}}/> */}
    <li><NavLink to="/">HOME</NavLink></li>
    {/* <AiIcons.AiFillRead style={{transform: "translateX(0px)", color:"#fff", zIndex: "10"}}/> */}
    <li><NavLink to="about">ABOUT</NavLink></li>
    {/* <div style={{transform: "translateX(0px)", color:"#fff", zIndex: "10"}}/> */}
    <li><NavLink to="nasa">NASA</NavLink></li>
    {/* <AiIcons.AiFillSmile style={{transform: "translateX(0px)", color:"#fff", zIndex: "10"}}/> */}
    <li><NavLink to="mypage" >MY PAGE</NavLink></li>
    {/* <AiIcons.AiTwotoneRocket style={{transform: "translateX(0px)", color:"#fff", zIndex: "10"}}/> */}
    <li><NavLink to="venturetours">TOURS</NavLink></li>
    {/* <AiIcons.AiOutlineAudit style={{transform: "translateX(0px)", color:"#fff", zIndex: "10"}}/> */}
    <li><NavLink to="testimonials">SALUTES</NavLink></li>
    {/* <AiIcons.AiFillEdit style={{transform: "translateX(0px)", color:"#fff", zIndex: "10"}}/> */}
    <li><NavLink to="contactus">CONTACT US</NavLink></li>
    </ul>
</nav>

  );
};
export default Navbar;