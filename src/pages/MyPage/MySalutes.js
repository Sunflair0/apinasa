import React from 'react';
import { connect } from "react-redux";

const MySalutes = () => {
    return (
        <>
            <div className='content_flexbox'>
                <div>MySalutes</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MySalutes);