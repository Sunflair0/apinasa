import React from 'react';
import { connect } from "react-redux";

const PresentLocation = () => {
  return (
    <>
    <div className="content_flexbox">
    <div>Present Location</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PresentLocation);