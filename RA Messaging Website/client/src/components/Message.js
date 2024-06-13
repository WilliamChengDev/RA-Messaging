import React from 'react'
import './Message.css'
import Quote from '../svgs/quote'

function Message({post}) {

  return (
    <div className='message-container'>
      <div className='message-bubble'>
        <div className='message-internal-container'>
          <div className='message-title'> {/* username of the poster, anonymous if userid=2 */}
            {(post.userid === 2) ? (
              <h3>Anonymous Resident</h3>
            ):(
              <h3>{post.userid}</h3>
            )}
          </div>
          <div className='message-contents'>
            <h3>{post.message}</h3>
          </div>
          <div className='timestamp'>
            {(typeof post.datecreated == 'undefined') ? (
              <h4>no date</h4>
            ):(
              <h4>{post.datecreated.slice(0,10)}</h4>
            )}
          </div>
          {(post.response === null) ? (
            <></>
          ) : (
            <div className='response-bubble'> {/* my response; empty div if none */}
              <h3>{post.response}</h3>
            </div>
          )}
        </div>
      </div>
      <div className='message-quote'> {/* for aesthetic purposes */}
        <Quote/>
      </div>
    </div>
  )
}

export default Message