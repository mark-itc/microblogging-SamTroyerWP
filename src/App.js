import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './views/Navbar';
import Home from './views/Home';
import ProfilePage from './views/ProfilePage';
import ErrorHandler from './views/ErrorHandler';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Home />,
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
