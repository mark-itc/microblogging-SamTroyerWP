import './Tweet.css'
import Avatar from './Avatar'

const Tweet = ({ tweet }) => {
        
    return (
        <div className='tweet'>
            <Avatar name={tweet.userName} />
            <div>
                <div className='tweet-header'>
                    <span className='tweet-user'>@{tweet.userName}</span>
                    <span className='tweet-created-on'>
                        {(tweet.date)}
                    </span>
                </div>
                <div className='tweet-content'>{tweet.content}</div>
            </div>
        </div>
    );
}

export default Tweet

