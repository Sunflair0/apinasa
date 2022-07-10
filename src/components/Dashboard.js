import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

const Dashboard = ({ clienttag }) => {
    return (
        <>
            <div className='dashboard'>
                <div className='in_dashboard'>
                    <div className='brand'><span className='brand_outline'>Space</span><span className='brand_solid'>Tours</span></div>
                    <div className='curr_user'>
                        <div className='logged'>Currently logged in as:  {clienttag} 12345678901234567890</div>
                        <div className='avatar'>
                        </div>
                    </div>
                    <div className='cart'><AiOutlineShoppingCart />
                    </div>
                </div>
                <NavLink to="Logout" className='d_button'>LOGOUT</NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);