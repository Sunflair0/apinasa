import React from "react";
import { connect } from "react-redux";

const Home = ({ clienttag }) => {
  return (
    <>
          <h1 className=" ">Welcome to SpaceTours, {clienttag}!</h1>
      
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