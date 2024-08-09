import React from 'react'
import './hero.css'
import ban from '../../Assets (1)/Assets/ban-png1.png'

export const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="her-left">
        <h1>New Arrivals Only</h1>
        <p>Get the latest fashion trends and styles at affordable prices</p>
        <a href="" className='button-56'>Shop Now</a>
      </div>
      <div className="her-right">
        <img src={ban} alt="" />
      </div>
    </div>
    </>
  )
}

export default Hero