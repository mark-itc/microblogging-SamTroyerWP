import React from 'react'
import {createContext, useState} from 'react'

const TweetsContext = createContext()


function TweetsContextProvider({ children }) {

    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const savedUserName = localStorage.getItem('userName') ? JSON.parse(localStorage.getItem('userName')) : []
    const newTweet = {
      userName: savedUserName,
      content: text,
      date: new Date().toISOString(),
    }


  return (
    <TweetsContext.Provider value={{ text, setText, error, setError, newTweet}}>
      {children}
    </TweetsContext.Provider>
  )
}

export {TweetsContext, TweetsContextProvider}
