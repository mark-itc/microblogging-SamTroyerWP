import React, {useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, db, logout} from '../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';


function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/');
    fetchUserName();
  }, [user, loading]);

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      
        {/* <a className="nav-item nav-link" href="home">Home</a> */}
        {/* <a className="nav-item nav-link" href="profile">Profile</a> */}
      
        {/* <div className='navbar_container'> */}
          <p className='nav-item'> Logged in as</p>
          <div>{name}</div>
          <div>{user?.email}</div>
        {/* </div> */}
        <button className='navbar_btn' onClick={logout}>
          Logout
        </button>
    </nav>
  )
}

export default Navbar
