import React from 'react'
import {createContext, useState} from 'react'

const ProfileContext = createContext()

function ProfileContextProvider({ children }) {

    const [userName, setUserName] = useState("")
    const [text, setText] = useState('');
  return (
    <ProfileContext.Provider value={{userName, setUserName, text, setText}}>
      {children}
    </ProfileContext.Provider>
  )
}

export { ProfileContext, ProfileContextProvider }
