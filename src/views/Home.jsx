import { useEffect, useState } from 'react';
import BlogPosts from '../components/BlogPosts';
import Timeline from '../components/Timeline';
import Tweet from '../components/Tweet';
import './Home.css'
import { sort } from 'fast-sort';
import HashLoader from "react-spinners/HashLoader";
import { getFromAPI } from '../operations/GetTweet';



function Home() {


    const [tweets, setTweets] = useState('');
    
    const [tweetsArray, setTweetsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const handlePostTweet = () => {
      setTweets([...tweets]);
    };
  
    useEffect(() => {
      const getTweets = async () => {
        setIsLoading(true);
        const serverTweets = await getFromAPI();
        setIsLoading(false);
        return setTweetsArray(serverTweets);
      };
  
      getTweets();
      const interval = setInterval(getTweets, 50000);
      
      return () => clearInterval(interval);
    }, []);
  
    useEffect((e) => {
      renderTweets();
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
            onSubmit={handlePostTweet}
          />
          <div className='tweets-list'>
            {isLoading ? (
              <HashLoader
                className="loader"
                color="#0B6EFD"
                size={80}
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