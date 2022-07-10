import React from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard"
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";




const Home = ({ clienttag }) => {
  return (
    <>
    

      {/* <h1 className=" ">Welcome to SpaceTours, {clienttag}!</h1> */}
  <Dashboard />
  <Logo />
 <Navbar />
      <Outlet />
     
    </>
  )
}
function mapStateToProps(state) {
  return {
    clienttag: state.client.clienttag
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);