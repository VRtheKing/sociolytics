import React from 'react'
import Prodcard from './Prodcard';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const Stats = () => {
  return (
    <div className='stats'>
        <div className="greet">
            <h1>Hello, User!</h1>
        </div>
        <div className="sep"></div>
        <div className="cardholder">
            <div className="card1"><Prodcard/></div>
            <div className="card2"><Prodcard/></div>
            <div className="card3"><Prodcard/></div>
        </div>
        <div className="recents">
            <h2>Recent Posts and Performance</h2>
            <div className='tweets'>
                <TwitterTweetEmbed
                tweetId="1141039841993355264"
                options={{ conversation: 'none' }}
            />
            <TwitterTweetEmbed
                tweetId="1141039841993355264"
                options={{ conversation: 'none' }}
            />
            <TwitterTweetEmbed
                tweetId="1141039841993355264"
                options={{ conversation: 'none' }}
            />
            </div>
        </div>
        {/* <div className="vertline"></div> */}
    </div>
  )
}

export default Stats;