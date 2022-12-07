import { useEffect, useState } from 'react';
import BlogPosts from '../components/BlogPosts';
import Timeline from '../components/Timeline';
import Tweet from '../components/Tweet';
import './Home.css'
import { sort } from 'fast-sort';
import RingLoader  from "react-spinners/RingLoader";
import { getFromAPI } from '../operations/GetTweet';



function Home() {

    
    const [tweetsArray, setTweetsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const storedTweet = JSON.parse(localStorage.getItem('myTweet')); // meant to be used in order to display self-tweet immediately from clicking "Tweet"



    useEffect(() => {
      const getTweets = async () => {
        setIsLoading(true);
        const serverTweets = await getFromAPI();
        setIsLoading(false);
        return setTweetsArray([...serverTweets]);
      };
  
      getTweets();
      const interval = setInterval(getTweets, 60000);
      
      return () => clearInterval(interval);
    }, []);
  
    useEffect((e) => {
      renderTweets(e);
    }, [tweetsArray]);
  
    const renderTweets = () => {
      const sortedTweets = sort(tweetsArray).desc((u) => u.date);

      
      return sortedTweets.map((tweet) => {
        return <Tweet key={tweet.date} tweet={tweet} />;
      });
    };

    return (
        <div className="home">
          <BlogPosts 
            className='blog-posts'
          />
          <div className='tweets-list'>
            {isLoading ? (
              <RingLoader
                className="loader"
                color="#0B6EFD"
                size={160}
                loading={isLoading}
              />
            ) : (
              renderTweets()
            )}
          </div>    
        </div>
      );
    }
    
    export default Home