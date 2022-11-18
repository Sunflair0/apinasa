import React from 'react'
import { connect } from "react-redux";

const DailyReward = () => {
    return (
        <>
            <div className="content_flexbox">
                <div>Daily Reward</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DailyReward);