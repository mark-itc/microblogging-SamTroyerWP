import React from 'react'
import {createContext, useState} from 'react'
import { db } from '../firebase';
import { collection } from 'firebase/firestore';

const TweetsContext = createContext()


function TweetsContextProvider({ children }) {

    const [text, setText] = useState('');
    const [error, setError] = useState(null);
    const [tweetsArray, setTweetsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const tweetsCollectionRef = collection(db, 'tweets')

    


  return (
    <TweetsContext.Provider value={{ text, setText, error, setError, tweetsArray, setTweetsArray, isLoading, setIsLoading, tweetsCollectionRef}}>
      {children}
    </TweetsContext.Provider>
  )
}

export {TweetsContext, TweetsContextProvider}
