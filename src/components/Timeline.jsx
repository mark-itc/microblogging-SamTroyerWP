import PropTypes from 'prop-types'
import Tweet from './Tweet.jsx'
import './Timeline.css'

function Timeline( {tweets} ) {
  
    return (
      <ul className="timeline">
        {Array.from(tweets)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(({ id, userName, date, content}) => (
          <li key={id} className="timeline-item">
             <Tweet userName={userName} date={date}>
               {content}
             </Tweet>
          </li>
        ))}
       </ul> 
    )
  }

Timeline.propTypes = {
    tweets: PropTypes.array,
}


export default Timeline