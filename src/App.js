import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import BlogPosts from './components/BlogPosts';
import Timeline from './components/Timeline'
import './App.css'

const CURRENT_USER = 'sam'

function App() {

  const [tweets, setTweets] = useState('')

  const handlePostTweet = (content) => {
    const newTweet = {
      content,
      id: nanoid(),
      created_on: Date(Date.now()),
      user: CURRENT_USER,
      comments_count: 0,
      retweets_count: 0,
      favorites_count: 0
    };

    setTweets([...tweets, newTweet]);
  };

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem('tweets'))
    if (storedTweets) setTweets(storedTweets)
  }, [])

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);
  

  return (
    <div className="app">
     <BlogPosts onSubmit={handlePostTweet} />
     <Timeline tweets={tweets} />
    </div>
  );
}

export default App;
