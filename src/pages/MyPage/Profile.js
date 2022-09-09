import React from 'react';
import { connect } from "react-redux";

const Profile = () => {
  return (
 <div className="content_flexbox">
	<div>Profile</div>
</div>
  )
}



const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => ({
  loggedInUser: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);