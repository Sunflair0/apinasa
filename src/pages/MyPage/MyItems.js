import React from 'react'
import { connect } from "react-redux";

const MyItems = () => {
  return (
  <>
  <div className="content_flexbox">
<div>My Items</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyItems);