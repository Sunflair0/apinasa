import {useLocation, Navigate, Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';


const RequireAuth = (allowedRoles) => {
    const location = useLocation()

  return (
    token
    // ?.roles?.find(role = allowedRoles?.includes(role))
    ? <Outlet />
    // :token?.user
    //     ?<Navigate to='/unauthorized' state={{ from : location}} replace />
    : <Navigate to='/loginpage' state={{ from : location}} replace />
  )
}

export default RequireAuth