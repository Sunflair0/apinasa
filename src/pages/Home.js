import React from "react";
import { connect } from "react-redux";

const Home = ({ client }) => {
  return (
    <>
      <div className="content_flexbox">
        <h1 className=" ">Welcome to SpaceTours, {client}!</h1>
      </div>
    </>
  )
}
function mapStateToProps(state) {
  return {
      client: state.client
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);