import { MyPageData } from './MyPageData';
import { NavLink, Outlet } from 'react-router-dom';
import { connect } from "react-redux";

const MyPage = (loggedInUser) => {
  return (
    <>
      <div className="content_flexbox my_page_background">
        <nav className="myBackground">
          <ul>
            {MyPageData.map((item) => {
              return (
                <li className={item.style}>
                  <NavLink to={item.path} style={({ isActive }) => {
                    return { color: isActive ? '#fff000' : '#067CB2' }
                  }}>

                    <div className={item.picStyle}>{item.inComp}</div>
                    <span className={item.tStyle}>{item.title}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <Outlet />
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

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);