import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './views/Navbar';
import Home from './views/Home';
import ProfilePage from './views/ProfilePage';
import ErrorHandler from './views/ErrorHandler';
import Register from './firebase/Register';
import Login from './firebase/Login';
import Reset from './firebase/Reset';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Login />,
      errorElement: <ErrorHandler />
    },
    {
      path: '/register',
      element:<Register />,
      errorElement: <ErrorHandler />      
    },
    // {
    //   path: '/login',
    //   element:<Login />,
    //   errorElement: <ErrorHandler />  
    // },
    {
        path: '/reset',
        element:<Reset />,
        errorElement: <ErrorHandler />  
    },
    {
      path: '/navbar',
      element: <Navbar />,  
      errorElement: <ErrorHandler />

    },
    {
      path: '/home',
      element: <Home />,  
      errorElement: <ErrorHandler />

    },
    {
      path: '/profile',
      element: <ProfilePage />,
      errorElement: <ErrorHandler />
    }
  ])

  return (
    <div className="app">
      <Navbar className='navbar' />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
