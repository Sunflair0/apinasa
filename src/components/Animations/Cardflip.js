import { useToggleContext } from "../../hooks/useToggleContext";
import Login from "../Auth/Login";
import SignUp from "../Auth/Signup";

export default function Cardflip() {
  const { isFlipped, handleFlipToggle } = useToggleContext();

  return (
    <>
<div className="flex_backing2">
      <div className={`flip_${isFlipped}`}>
        <div className="card">
          <div className="face login ">
            <Login />
            <button onClick={handleFlipToggle} style={{ transform: "translate(23px, 300px)" }}
              className="tgButton" >Sign Up!</button>
          </div>
          <div className="face signup ">
            <SignUp />
            <button onClick={handleFlipToggle} style={{ transform: "translate(-209px, 310px)" }}
              className="tgButton" >Back to Login</button>
          </div>
        </div>
      </div></div>
    </>
  );
}