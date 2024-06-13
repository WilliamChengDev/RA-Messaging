import React from 'react'
import './Home.css'
import Quote from '../svgs/quote.jsx'
import Smiley from '../svgs/smiley'

function Home() {
  return (
    <div className='home-page-background'>
        <div className='title-container'>
            <div className='title'>
                <div className='title-lines-container'>
                    <h1>LEAVE A</h1>
                    <h1>MESSAGE</h1>
                    <h1>FOR ME!</h1>
                </div>
            </div>
            <div className='title-quote-container'>
                <Quote/>
            </div>
        </div>
        <div className='title-image-container'>
            <div className='smiley-container'>
                <Smiley/>
            </div>
        </div>
    </div>
  )
}

export default Home