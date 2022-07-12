import React from 'react'
import '../../App.css'
import { Button } from '../button/Button'
import './herosection.css'

const HeroSection = () => {
  return (
    <div className='hero__container'>
        <video src='../../../public/videos/video-2.mp4' autoPlay loop muted />
        <h1>Adventure Awaits</h1>
        <p>Lorem ipsum dolor sit amet consectetur ?</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn__outline' buttonSize="btn__large">Get Started</Button>
            <Button className="btns" buttonStyle='btn__primary' buttonSize="btn__large">Watch Trailer <i className="far fa-play-circle"></i></Button>    
        </div>
    </div>
  )
}

export default HeroSection