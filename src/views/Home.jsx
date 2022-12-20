import { useEffect, useState, useContext } from 'react';
import BlogPosts from '../components/BlogPosts';
import { TweetsContext } from '../contexts/TweetsContext';
// import Timeline from '../components/Timeline';
import Tweet from '../components/Tweet';
import './Home.css'
import { sort } from 'fast-sort';
import RingLoader  from "react-spinners/RingLoader";
// import { getFromAPI } from '../operations/GetTweet';
import { db } from '../firebase';
import {
  getDocs,
  onSnapshot,
} from 'firebase/firestore'



function Home() {

    const {tweetsArray, setTweetsArray, error, setError, isLoading, setIsLoading, tweetsCollectionRef} = useContext(TweetsContext);



    useEffect(() => {
      const getTweets = async () => {
        try {
          onSnapshot(tweetsCollectionRef, (snapshot) => {
            snapshot.docs.forEach((doc) =>
            tweetsArray.push({
              ...doc.data(),
              id: doc.id,
            })
            );
            setTweetsArray(tweetsArray)
          })
          setIsLoading(true);
          const data = await getDocs(tweetsCollectionRef);
          setTweetsArray(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          console.log(data.docs)
          setIsLoading(false);
          return setTweetsArray(tweetsArray);
        } catch (error) {
          setError(error);
        }
      };
      getTweets();
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