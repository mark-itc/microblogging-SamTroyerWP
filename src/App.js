import './App.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import Navbar from './views/Navbar';
import Home from './views/Home';
import ProfilePage from './views/ProfilePage';

function App() {

  return (
    <div className="app">
      <Navbar className='navbar' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
