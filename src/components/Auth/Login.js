import React, { useState, useEffect, useCallback } from "react";
import { login } from "../../redux/features/userSlice";import { connect } from "react-redux";
import useAPI from "../../hooks/useAPI";
import TourguideLight from "../Tourguide/TourguideLight";
import { useNavigate } from "react-router-dom";


export const Login = ({ setUser }) => {
    const { login: apiLogin } = useAPI();
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [displayError, setDisplayError] = useState(false);
    const [apiError, setApiError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (usernameInput.length > 20) {
            setUsernameError("Handle, less than 20 characters, please");
        } else if (usernameInput.length < 2) {
            setUsernameError("Handle must be at least 2 characters");
        } else {
            setUsernameError(null);
        }
    }, [usernameInput]);

    useEffect(() => {
        if (passwordInput.length > 20) {
            setPasswordError("Password, less than 20 characters, please");
        } else if (passwordInput.length < 6) {
            setPasswordError("Password must be at least 6 characters");
        } else {
            setPasswordError(null);
        }
    }, [passwordInput]);

    const login = useCallback(() => {
        async function init() {
            const res = await apiLogin(usernameInput, passwordInput);
            if (!res.success) {
                setApiError(res.error);
                
            } else {
                setUser(res.data.username);
                navigate('/home');
            }
        }
        if (usernameError || passwordError) {
            setDisplayError(true);
        } else {
            init();
        }
    }, [
        usernameInput,
        usernameError,
        passwordInput,
        passwordError,
        setDisplayError,
        setApiError,
 
    ]);

    return (
        <>
            <form className="tourguide sunburn">
                <div className="stripe">
                     <TourguideLight />
                    <div className="namepass">                   
                    <input
                        style={{ width: "80%" }}
                        type="text"
                        error={displayError ? !!usernameError : undefined}
                        label="SpaceTours Handle"
                        value={usernameInput}
                        onChange={(e) => setUsernameInput(e.target.value)}
                    />
                    <input
                        style={{ width: "80%" }}
                        type="password"
                        error={displayError ? !!passwordError : undefined}
                        label="Password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                    />
                    </div>
                </div>
                <div className="outerS">
                    <div className="gmessage">Now that you have an account, hit the GO button for your next adventure. Keep this device with you to access Ventures on reverse side.</div>
                    <button style={{ transform: "translate(6px, -10px)" }}
                        className="btnGroup" onClick={() => login()}>
                        GO
                    </button>
                </div>
                <div className="outerS">
                    <div className="smessage">
                        If  you have not had the opportunity to create an account, please sign up before entering the site.</div>
                    {/* Sign Up! button located on CardFlip.js */}
                    <div className="errorMessage">
                        {apiError && (
                            <span>{apiError}</span>
                        )}
                    </div>
                </div>
            </form>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
      login: (username) => dispatch(login(username)),
    };
  };
  
  const mapStateToProps = () => ({});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);