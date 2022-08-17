import { MyPageData } from './MyPageData';
import { NavLink } from 'react-router-dom';
import { Outlet } from "react-router-dom";

const MyPage = () => {
  return (
    <>
      <div className="content_flexbox my_page_background">
        <nav>
          <ul>
            {MyPageData.map((item) => {
              return (
                <li className={item.style}>
                  <NavLink to={item.path} style={({ isActive }) => {
                    return { color: isActive ? '#fff000' : '#74a741' }
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
export default MyPage;
