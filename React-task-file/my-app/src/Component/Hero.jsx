import React from 'react'
import heroPic from '../image/homepage-header.svg'
import '../Style/Hero.css'

const Hero = () => {
  return (
    <div className="container">
        <div className="hero-box">
            <div className="box-1">
                <div className="box-1-1">
                    <p>We build custom, mobile-first software designed to make your life easier<span>.</span></p>
                </div>
                <div className="box-1-2">
                    <p>We design and build easy-to-manage software that elevates the way companies do business. Whether you want to improve efficiency, wow customers, or compete to win, we can help.</p>
                </div>
                <div className="box-1-3">
                    <p>Ready to take the headache out of your tech project?</p>
                </div>
                <div className="box-1-4">
                    <button>Let's talk strategy</button>
                </div>
            </div>

            <div className="box-2">
                <div className="hero-box-img">
                    <img src={heroPic} alt="HeroImage" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero