import React from 'react'
import {createContext, useState} from 'react'

const TweetsContext = createContext()


function TweetsContextProvider({ children }) {

    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    


  return (
    <TweetsContext.Provider value={{ text, setText, error, setError}}>
      {children}
    </TweetsContext.Provider>
  )
}

export {TweetsContext, TweetsContextProvider}
