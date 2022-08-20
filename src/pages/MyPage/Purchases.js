import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


const Purchases = () => {
    return (
        <>
            <div className="content_flexbox">
                <div>Purchases</div>
                <Link to='myitems'>Inventory</Link>
                <Link to='mytrip'>Ticket</Link>

                <Link to=':tourId'>TOURS</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Purchases);