import { useToggleContext } from "../../hooks/useToggleContext";
import Login from "../../redux/features/auth/Login";
import SignUp from "../../redux/features/auth/Signup";

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
            <button onClick={handleFlipToggle} style={{ transform: "translate(-209px, 350px)" }}
              className="tgButton" >Back to Login</button>
          </div>
        </div>
      </div></div>
    </>
  );
}