import React, { useState, useEffect, useCallback } from "react";
import { setClienttag } from "../redux/actions";
import { connect } from "react-redux";
import useAPI from "../hooks/useAPI";
import TourGuideLight from "./TourGuideLight";


export const Login = ({ setClienttag }) => {
    const { login: apiLogin } = useAPI();
    const [clienttagInput, setClienttagInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [clienttagError, setclienttagError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [displayError, setDisplayError] = useState(false);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        if (clienttagInput.length > 20) {
            setclienttagError("Handle must be at max 20 characters");
        } else if (clienttagInput.length < 2) {
            setclienttagError("Handle must be at least 2 characters");
        } else {
            setclienttagError(null);
        }
    }, [clienttagInput]);

    useEffect(() => {
        if (passwordInput.length > 20) {
            setPasswordError("Password must be at max 20 characters");
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
                setClienttag(res.data.clienttag);
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
    ]);



    return (
        <>

            <div className="login-container">
                <div className="login-message">
                    {apiError && (
                        <div className="errorMessage">
                            <span>{apiError}</span>
                        </div>
                    )}
                </div>
            </div>
            <form className="tourguide">
                <div className="stripe">
                    <div className="namepass"></div>
                    <TourGuideLight />

                    <div className="login-input-container">
                        <div className="input-container">
                            <input
                                style={{ width: "80%" }}
                                type="text"                                
                                error={displayError && !!clienttagError}
                                label="SpaceTours Handle"
                                value={clienttagInput}
                                helperText={displayError ? clienttagError : ""}
                                onChange={(e) => setClienttagInput(e.target.value)}
                            />
                        </div>
                        <div className="input-container">
                            <input
                                style={{ width: "80%" }}
                                type="password"

                                
                                error={displayError && !!passwordError}
                                label="Password"
                                
                                value={passwordInput}
                                helperText={displayError ? passwordError : ""}
                                onChange={(e) => setPasswordInput(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="outerS">
                        <div className="gmessage">Now that you have an account, hit the GO button for your next adventure. Keep this device with you to access Ventures on reverse side.</div>
                        <button style={{ transform: "translateX(6px)" }}
                            className="btnGroup" variant="contained" onClick={() => login()}>
                            GO
                        </button>
                    </div>
                    <div className="outerS">
                        <div className="smessage">
                            If  you have not had the opportunity to create an account, please sign up before entering the site.</div>
                    </div>
                </div>

            </form>
        </>
    );
};

function mapStateToProps(state){};
const mapDispatchToProps = { setClienttag };

export default connect(mapStateToProps, mapDispatchToProps)(Login);