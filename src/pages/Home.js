import React from "react";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard"
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";

const Home = ({ clienttag }) => {
  return (
    <>
          {/* <h1 className=" ">Welcome to SpaceTours, {clienttag}!</h1> */}
       <Dashboard />
      <div className="menu_flexbox">
       
      <Logo  />
      <Navbar />
      </div>
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