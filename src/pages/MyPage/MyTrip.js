import React from 'react'
import { connect } from "react-redux";

const MyTrip = () => {
  return (
    <>
    <div className="content_flexbox">
  <div>My Trip that I purchased</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyTrip);