import React from 'react'

const RequireAuth = () => {
  return (
    <div>RequireAuth</div>
  )
}

export default RequireAuth

// import {useLocation, Navigate, Outlet} from 'react-router-dom';
// import { useSelector } from 'react-redux';


// const RequireAuth = (allowedRoles) => {
//     const location = useLocation()

//   return (
//     token
//     // ?.roles?.find(role = allowedRoles?.includes(role))
//     ? <Outlet />
//     // :token?.user
//     //     ?<Navigate to='/unauthorized' state={{ from : location}} replace />
//     : <Navigate to='/loginpage' state={{ from : location}} replace />
//   )
// }

