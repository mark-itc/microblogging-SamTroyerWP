import PropTypes from 'prop-types'
import React, {useState} from 'react'
import './BlogPosts.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import localForage from 'localforage';


function BlogPosts( {onSubmit} ) {
     
const [text, setText] = useState('');
// const [tweetImage, setTweetImage] = useState('')
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
  e.preventDefault()
  onSubmit(text)
  setText('')
  console.log(text)

  

  // const tweet = [text];
  // const randomnumber = Math.floor((Math.random()*100000000)+1)
  // const randomnumberstringify = String(randomnumber) 
  
  // localStorage.setItem(('tweet' + randomnumberstringify), JSON.stringify(tweet));

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
