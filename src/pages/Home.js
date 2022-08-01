import React from "react";
import { connect } from "react-redux";

const Home = ({ user }) => {
  return (
    <>
      <div className="content_flexbox">
        <h1 className=" ">Welcome to SpaceTours, {user}!</h1>
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