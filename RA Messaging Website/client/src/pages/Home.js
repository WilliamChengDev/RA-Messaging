import React, { useEffect, useState } from 'react'
import './Home.css'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import Quote from '../svgs/quote.jsx'
import Smiley from '../svgs/smiley'

function Home() {
    gsap.registerPlugin(useGSAP);
    const[startSequence] = useState(gsap.timeline({paused:true}));

    useGSAP(() => {
        startSequence.fromTo(".title-lines-container h1",{opacity:0} , {opacity:1, stagger:.3, delay:.3})
        startSequence.fromTo("#right-eye",{scaleY:1} ,{scaleY:.1, duration:.1});
        startSequence.to("#right-eye",{scaleY:1, duration:.5});
        startSequence.to(".smiley-container", {width:'3000vw', ease:'power3.in', duration:1, marginTop:'20%'});
        startSequence.fromTo(".home-page-background", {opacity:1}, {opacity:0, delay:.5});
        startSequence.to(".home-page-background", {display:'none', ease: 'expo.out'});
    })

    useEffect(() => {
        startSequence.play();
    }, [])

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