import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth, 
    registerWithEmailAndPassword, 
    signInWithGoogle,
} from '../firebase';
import './Register.css'

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert('Please enter name');
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) navigate('/home');
    }, [user, loading]);

    return (
        <div className="register">
            <div className="register_container">
                <input
                    type='text'
                    className="register_textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Full Name'
                />
                <input
                    type='text'
                    className="register_textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email Address'
                />
                <input
                    type='password'
                    className="register_textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <button
                    className="register_btn register_google"
                    onClick={signInWithGoogle}
                >
                    Register with Google
                </button>
                <div>
                    Already have an account? <Link to='/'>Login</Link> now.
                </div>
            </div>
        </div>
    )
}

export default Register;

// const Register = () => {
//     const [form, setForm] = useState({
//         email: '',
//         password: ''
//     })
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await register(form);
//     }

//     const InputFields = {
//                 padding:'0.5rem',
//                 margin:'0.8rem',
//                 borderRadius: '4px'
//             }
//             const ButtonStyle = {
//                 borderRadius: '4px',
//                 padding:'0.7rem',
//                 margin:'0.5rem'
//             }

//     return (
//         <div>
//             <h1>Register</h1>
//             <form onSubmit={handleSubmit} >
//             <label for="email">Email</label>
//             <input type="text" style={InputFields}
//                 placeholder="email" id="mail"
//             onChange={(e) => 
//             setForm({...form, email: e.target.value})} />
//             <br/>
//             <label for="password">Password</label>
//             <input type="password"  placeholder="Password"
//                 style={InputFields}
//             onChange={(e) =>
//             setForm({...form, password: e.target.value})}/>
//             <br/>
//             <button type="submit" style={ButtonStyle}>
//                 Submit
//             </button>
//             </form>
//             Have an account?  <a href='login'>Login!</a>
//         </div>
//     )
// }

// export default Register