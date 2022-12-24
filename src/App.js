import React from 'react';
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './views/Navbar';
import Home from './views/Home';
// import ProfilePage from './views/ProfilePage';
import ErrorHandler from './views/ErrorHandler';
import Register from './firebase/Register';
import Login from './firebase/Login';
import Reset from './firebase/Reset';
import Signup from './firebase/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import Signin from './firebase/Signin';
import {PrivateRoute1} from './components/PrivateRoute1';
import { PrivateRoute2 } from './components/PrivateRoute2';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

function App() {

  return (
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh' }}
      >
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path='/' element={<PrivateRoute1/>}>
                  <Route exact path='/' element={<Dashboard/>}/>
                </Route>
                <Route path='/update-profile' element={<PrivateRoute2/>}>
                  <Route path='/update-profile' element={<UpdateProfile/>}/>
                </Route>
                <Route path='/signup' element={<Signup/>} />
                <Route path='/login' element={<Signin/>} />
                <Route path='/forgot-password' element={<ForgotPassword/>} />

              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  )
}
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element:<Login />,
  //     errorElement: <ErrorHandler />
  //   },
  //   {
  //     path: '/register',
  //     element:<Register />,
  //     errorElement: <ErrorHandler />      
  //   },
  //   // {
  //   //   path: '/login',
  //   //   element:<Login />,
  //   //   errorElement: <ErrorHandler />  
  //   // },
  //   {
//         path: '/reset',
//         element:<Reset />,
//         errorElement: <ErrorHandler />  
//     },
//     {
//       path: '/navbar',
//       element: <Navbar />,  
//       errorElement: <ErrorHandler />

//     },
//     {
//       path: '/home',
//       element: <Home />,  
//       errorElement: <ErrorHandler />

//     },
//     // {
//     //   path: '/profile',
//     //   element: <ProfilePage />,
//     //   errorElement: <ErrorHandler />
//     // }
//   ])

//   return (
//     <div className="app">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

export default App;
