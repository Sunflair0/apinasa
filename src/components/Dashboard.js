import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Dashboard = ({ client }) => {
    return (
        <>
            <div className='dashboard'>
                <div className='in_dashboard'>
                    <div className='brand'><span className='brand_outline'>Space</span><span className='brand_solid'>Tours</span></div>
                    <div className='curr_user'>
                        <div className='logged_user' >Currently logged in as: {client}
                        <span style={{color: '#00ffae'}}>12345678901234567890</span></div>
                        <div className='avatar_box'><div className='avatar'>
                        </div>
                        </div>
                    </div>
                    <div className='cart'><AiOutlineShoppingCart />
                    </div>
                </div>
                <Link to="/loginpage" className='d_button'>LOGOUT</Link>
            </div>

        </>
    )
}
function mapStateToProps(state) {
    return {
        client: state.client
    };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);