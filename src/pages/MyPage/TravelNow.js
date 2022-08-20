import React from 'react';
import { connect } from "react-redux";

const TravelNow = () => {
  return (
    <>
    <div className="content_flexbox">
    <div>Travel Now</div>
    </div>
    </>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => ({
  loggedInUser: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelNow);