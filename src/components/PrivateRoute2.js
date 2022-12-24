import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Dashboard from './Dashboard';
import UpdateProfile from './UpdateProfile';

export const PrivateRoute2 = () => {

  const { currentUser } = useAuth();

  return currentUser ? <UpdateProfile /> : <Navigate to='/login'/>
};