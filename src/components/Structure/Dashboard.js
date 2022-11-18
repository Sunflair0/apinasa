import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Brand from './Brand';

const Dashboard = ({ loggedInUser }) => {
    return (
        <>
            <div className='dashboard'>
                <div className='in_dashboard'>
                    < Brand />
                    <div className='messages dots'></div>
                    <div className='curr_user'>
                        <div className='logged_user' >Currently logged in as: <span style={{ color: '#00ffae', fontWeight: '600' }}>{loggedInUser}</span>
                            </div>
                        <div className='avatar_box'><div className='avatar_mercury'>
                        </div>
                        </div>
                    </div>
                    <div className=' clippy'><AiOutlineShoppingCart />
                    </div>
                </div>
                <Link to="/loginpage" className='d_button'>LOGOUT</Link>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    loggedInUser: state.user,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);