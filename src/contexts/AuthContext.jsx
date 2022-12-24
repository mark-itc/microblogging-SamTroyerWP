import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from '@firebase/auth'
import React, { useContext, useState, useEffect } from 'react'
import {auth, registerWithEmailAndPassword} from '../firebase'
// import { createUserWithEmailAndPassword } from '@firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider( { children }) {
    
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    
    function signup(email, username, password) {
        registerWithEmailAndPassword(auth, email, username, password)
    }

    function login(email, password) {
        signInWithEmailAndPassword (auth, email, password)
    }

    function logout(email) {
        signOut(auth, email)
    }

    function resetPassword(email) {
        sendPasswordResetEmail(auth, email)
    }

    function updateEmail(email) {
        updateEmail(auth, email)
    }

    function updateUsername(username) {
        updateUsername(auth, username)
    }

    function updatePassword( password) {
        updatePassword(auth, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
    
        return unsubscribe
    }, [])
    
    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateUsername
    }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>

  )
}

export default AuthContext
