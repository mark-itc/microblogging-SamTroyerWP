import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Login.css';
import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';;

// import { login } from './auth'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate;
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate('/home')
    }, [user, loading]);
    return (
        <div className='login'>
            <div className='login_container'>
                <input
                    type='text'
                    className='login_textBox'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email Address'
                />
                <input
                    type='password'
                    className='login_textbox'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <button
                    className='login_btn'
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <button className='login_btn login_google' onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to='/reset'>Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to='/register'>Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Login

// const Login = () => {

//     const [form, setForm] = useState({
//         email: '',
//         password: ''
//     })

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await login(form);
//     }

//     const InputFields = {
//         padding:'0.5rem',
//         margin:'0.8rem',
//         borderRadius: '4px'
//     }
//     const ButtonStyle = {
//         borderRadius: '4px',
//         padding:'0.7rem',
//         margin:'0.5rem'
//     }


//   return (
//     <div>
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit} >
//         <label for="email">Email</label>
//         <input type="text" style={InputFields}
//             placeholder="email" id="mail"
//         onChange={(e) =>
//         setForm({...form, email: e.target.value})} />
//         <br/>
//         <label for="password">Password</label>
//         <input type="password"  placeholder="Password"
//             style={InputFields}
//         onChange={(e) =>
//         setForm({...form, password: e.target.value})}/>
//         <br/>
//         <button type="submit" style={ButtonStyle}>
//             Submit
//         </button>
//         </form>
//     </div>
//   )
// }

// export default Login

