import React from "react";
import { connect } from "react-redux";

const Home = ({ loggedInUser }) => {
  return (
    <>
      <div className="content_flexbox">
        <h1 className=" ">Welcome to SpaceTours, {loggedInUser}!</h1>
      <div className='construction'>Website is under construction.<br/>Be patient, it will be awesome.</div>
</div>
    </>
  )
}
const mapStateToProps = (state) => ({
    loggedInUser: state.user,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);