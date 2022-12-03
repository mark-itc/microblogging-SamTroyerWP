import React from 'react'
import {useContext} from 'react'
import './BlogPosts.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { postTweet } from '../operations/PostTweet';
import { TweetsContext } from '../contexts/TweetsContext';


function BlogPosts() {
     
const {text, setText, error, setError, savedUserName, newTweet} = useContext(TweetsContext)



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


const sendTweet = (e) => {
  const tweetObject = {
    userName: savedUserName,
    content: text,
    date: new Date().toISOString(),
  };
  myTweet()
  postTweet(tweetObject)
  e.preventDefault()
  setText('')
  console.log(text) 
}

const myTweet = () => {
  localStorage.setItem('myTweet', JSON.stringify(newTweet));
 };

 const handleKeyDown = e => {
  if (!e.shiftKey && e.key === 'Enter')
  e.preventDefault()
 }

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
              onKeyDown={handleKeyDown}
          />
          <span className='char-error'>{error && error}</span>
          <Button disabled={!text} onChange={() => handleBtn()} text="Tweet" />
      </div>
    </form>
  )
}

export default BlogPosts
