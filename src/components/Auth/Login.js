import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/features/userSlice";
import { connect } from "react-redux";
import TourguideLight from "../Tourguide/TourguideLight";

function Login({ login }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [showError, setShowError] = useState(false);


    const passError = useMemo(
        () => password.length < 6 || password.length > 30,
        [password]
    );
    const userError = useMemo(
        () => username.length < 2 || username.length > 20,
        [username]
    );

    useEffect(() => {
        if (username.length > 20) {
            setUsernameError("Handle, max 20 characters, please");
        } else if (username.length < 2) {
            setUsernameError("Handle must be at least 2 characters");
        } else {
            setUsernameError(null);
        }
    }, [username]);

    useEffect(() => {
        if (password.length > 30) {
            setPasswordError("Password, max 30 characters, please");
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
        } else {
            setPasswordError(null);
        }
    }, [password]);

    return (
        <>
            <form className="tourguide sunburn">
                <div className="stripe">
                    <div><TourguideLight /></div>
                    <div className="namepass">
                        <input
                            required
                            title="Between 2 and 20 characters"
                            type="text"
                            pattern="{2,20}"
                            placeholder="SpaceTours Handle"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            error={showError ? !!usernameError : undefined}
                        />
                        <input
                            required
                            title="Between 6 and 30 characters"
                            type="password"
                            pattern="{6,30}"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={showError ? !!passwordError : undefined}
                        />
                    </div>
                </div>
                <div className="outerS">
                    <div className="gmessage">Now that you have an account, hit the GO button for your next adventure. Keep this device with you to access Ventures on reverse side.</div>

                    <button style={{ transform: "translate(3px, -10px)" }}
                     disabled={passError || userError}
                        onClick={(e) => {
                            e.preventDefault();
                            if (!passError && !userError) {
                                login(username);
                                navigate("/");
                            }
                        }}
                        type="submit">
                        GO
                    </button>
                </div>
                <div className="outerS">
                    <div className="smessage">
                        If  you have not had the opportunity to create an account, please sign up before entering the site.</div>
                    {/* Sign Up! button located on CardFlip.js */}
                    <div className="errorMessage">

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