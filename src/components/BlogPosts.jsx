import React from 'react'
import {useContext, useState} from 'react'
import './BlogPosts.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { TweetsContext } from '../contexts/TweetsContext';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useEffect } from 'react';


function BlogPosts() {
     
const {text, setText, error, setError, tweetsArray, setTweetsArray, tweetsCollectionRef} = useContext(TweetsContext)


  function Button (props) {
    const {disabled, onChange} = props
    return (<button disabled={disabled} onChange={onChange} className='btn btn-primary'>Tweet</button>)
  }

  const handleChange = (e) => {
      if (e.target.value.length > 141) {
      setError('Tweets cannot be longer than 140 chars');
    } else {
      setText(e.target.value);
      setError(null);
    }
  };


const handleBtn = () => {}

const savedUserName = localStorage.getItem('userName') 
? JSON.parse(localStorage.getItem('userName')) : []

const [num, setNum] = useState();

function randomID(min, max) { 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


    const newTweet = {
      userName: savedUserName,
      content: text,
      date: new Date().toISOString(),
      id: num
    }

  const postTweet = async () => {
    await addDoc(tweetsCollectionRef, newTweet);
    setTweetsArray([newTweet, ...tweetsArray]);
  }

const sendTweet = (e) => {
  myTweet()
  setNum(randomID(1, 10000))
  postTweet(newTweet)
  e.preventDefault()
  setText('')
  console.log(text) 
}
const myTweet = () => {
  localStorage.setItem('myTweet', JSON.stringify(newTweet));
 };



  return (
    <form className='compose-form' onSubmit={sendTweet}>
      <div className='container-sm'>
          <textarea 
              className='tweet-box'
              type='text'
              rows='5'
              placeholder='Insert Tweet Here'
              onChange = {handleChange}
              value = {text}
          />
          <span className='char-error'>{error && error}</span>
          <Button disabled={!text} onChange={() => handleBtn()} text="Tweet" />
      </div>
    </form>
  )
}

export default BlogPosts
