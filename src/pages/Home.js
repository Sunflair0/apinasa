import React from "react";
import { connect } from "react-redux";

const Home = ({ clienttag }) => {
  return (
    <>
<div className="content_flexbox">
          <h1 className=" ">Welcome to SpaceTours, {clienttag}!</h1>
      </div>
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