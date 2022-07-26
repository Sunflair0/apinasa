import React, { useState, useEffect, useCallback } from "react";
import { setClient } from "../redux/actions";
import { connect } from "react-redux";
import useAPI from "../hooks/useAPI";
import TourGuideLight from "./TourGuideLight";
import { useNavigate } from "react-router-dom";


export const Login = ({ setClient }) => {
    const { login: apiLogin } = useAPI();
    const [clienttagInput, setClienttagInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [clienttagError, setClienttagError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [displayError, setDisplayError] = useState(false);
    const [apiError, setApiError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (clienttagInput.length > 20) {
            setClienttagError("Handle, less than 20 characters, please");
        } else if (clienttagInput.length < 2) {
            setClienttagError("Handle must be at least 2 characters");
        } else {
            setClienttagError(null);
        }
    }, [clienttagInput]);

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
            const res = await apiLogin(clienttagInput, passwordInput);
            if (!res.success) {
                setApiError(res.error);
                
            } else {
                setClient(res.data.clienttag);
                navigate('/home');
            }
        }
        if (clienttagError || passwordError) {
            setDisplayError(true);
        } else {
            init();
        }
    }, [
        clienttagInput,
        clienttagError,
        passwordInput,
        passwordError,
        setDisplayError,
        setApiError,
        // apiLogin,
        // setClient
    ]);

    return (
        <>
            <form className="tourguide sunburn">
                <div className="stripe">
                     <TourGuideLight />
                    <div className="namepass">                   
                    <input
                        style={{ width: "80%" }}
                        type="text"
                        error={displayError ? !!clienttagError : undefined}
                        label="SpaceTours Handle"
                        value={clienttagInput}
                        onChange={(e) => setClienttagInput(e.target.value)}
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

function mapStateToProps(state) {
    return {
        client: state.client
    };
}
const mapDispatchToProps = { setClient };

export default connect(mapStateToProps, mapDispatchToProps)(Login);