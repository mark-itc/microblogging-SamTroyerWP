import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from '../firebase';
import './Reset.css'

function Reset() {
    const [email, setEmail] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate('/home');
    }, [user, loading]);

    return (
        <div className="reset">
            <div className="reset_container">
                <input
                    type='text'
                    className="reset_textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email Address'
                />
                <button
                    className="reset_btn"
                    onClick={() => sendPasswordReset(email)}
                >
                    Send Password Reset Email
                </button>
                <div>
                   Don't have an account? <Link to='/register'>Register</Link> now.
                </div>
            </div>
        </div>
    )
}

export default Reset;