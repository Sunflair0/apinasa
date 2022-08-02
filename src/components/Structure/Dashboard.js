import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Brand from './Brand';

const Dashboard = ({ user }) => {
    return (
        <>
            <div className='dashboard'>
                <div className='in_dashboard'>
                    < Brand />
                    <div className='curr_user'>
                        <div className='logged_user' >Currently logged in as: {user}
                            <span style={{ color: '#00ffae' }}>12345678901234567890</span></div>
                        <div className='avatar_box'><div className='avatar_earth'>
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
        user: state.user
    };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);