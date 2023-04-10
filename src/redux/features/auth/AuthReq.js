
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const AuthReq = () => {
const token = useSelector(selectCurrentToken)
const location = useLocation()

  return (
token
? <Outlet />
: <Navigate to="/loginpage" state={{ from: location}} replace />
   
  )
}

export default AuthReq