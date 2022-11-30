import PropTypes from 'prop-types'
import React, {useState} from 'react'
import './BlogPosts.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { postTweet } from '../operations/PostTweet';


function BlogPosts( {onSubmit} ) {
     
const [text, setText] = useState('');
const [error, setError] = useState(null)


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
    userName: 'robot panda',
    content: text,
    date: new Date().toISOString(),
  };
  postTweet(tweetObject)
  e.preventDefault()
  onSubmit(text)
  setText('')
  console.log(text) 
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
          />
          <span className='char-error'>{error && error}</span>
          <Button disabled={!text} onChange={() => handleBtn()} text="Tweet" />
      </div>
    </form>
  )
}

BlogPosts.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default BlogPosts
