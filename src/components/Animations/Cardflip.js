import { useToggleContext } from "../../hooks/useToggleContext";
import Login from "../Auth/Login";
import SignUp from "../Auth/Signup";

export default function Cardflip() {
  const { isFlipped, handleFlipToggle } = useToggleContext();

  return (
    <>
      <div className="content_flexbox">
        <div className={`flip_${isFlipped}`}
          onClick={handleFlipToggle} >
          <button style={{ transform: "translate(-270px, 400px)" }}
            className="tgButton" >
            Sign Up!
          </button>

          <button style={{ transform: "translate(-208px, -200px)" }}
            className="tgButton" >
            To Login
          </button>
        </div>

        <div className="card">
          <Login className="face login " />
          <SignUp className="face signup " />
        </div>
      </div>
    </>
  );
}