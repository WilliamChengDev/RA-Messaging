import React, { useState, useEffect } from 'react'
import './Feed.css';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import Message from '../components/Message';
import NewMessage from '../components/NewMessage';



function Feed() {
  gsap.registerPlugin(useGSAP);
  const[posts, setPosts] = useState([{}])
  const[newMessageTl] = useState(gsap.timeline({repeat: 0, paused:true}))

  useGSAP(() => {
    newMessageTl.to(".new-message-container", {display:'flex'});
    newMessageTl.fromTo(".new-message-window", {opacity:0}, {opacity:1}, '<');
  })

  const openNewMessageWindow = (e) => {
    newMessageTl.play();
  }

  useEffect(() => { //fetch post on page mount
    fetchPosts();
  }, [])

  const fetchPosts = () => { //tool used to fetch/refresh posts, can be passed to children
    fetch('/posts').then(
      response => response.json()
    ).then(
      data => {
        data.sort((a, b) => (a.postid < b.postid ? 1: -1)); //sort json from newest to oldest message
        setPosts(data); //set state to json object
      }
    )
  }

  return (
    <div className='feed-background'>
        <div className='top-row'>
          <div className='top-row-bar'></div>
        </div>
        <div className='feed-container'>
            <div className='feed'>
              {(typeof posts === 'undefined') ? (
                <div className='feed-loading'>
                  <h1>feed loading...</h1>
                </div>
              ) : (
                (posts.map((post, i) => (
                  <Message key={i}
                    post = {post}
                  />
                )))
              )}
            </div>
        </div>
        <div className='bottom-row'>
            <div className='new-message-button' onClick={openNewMessageWindow}>
                <h1>New Message</h1>
            </div>
        </div>
        <NewMessage newMessageTl={newMessageTl} fetchPosts={fetchPosts}/>
    </div>
  )
}

export default Feed