import React from "react";
import { connect } from "react-redux";

const Home = ({ loggedInUser }) => {
  return (
    <>
      <div className="content_flexbox">
        <h1 className=" ">Welcome to SpaceTours, {loggedInUser}!</h1>
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
 
  };
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);