import React from 'react'
import './offer.css'
import img from '../../Assets (1)/Assets/of2.png'

const Offer = () => {
  return (
    <>
    <div className="offers">
      <div className="offers-left">
        <h1>Special Offer</h1>
        <p>Get 20% off on your first purchase</p>
        <a href="" className='button-56'>Visit Now</a>
      </div>
      <div className="offers-right">
        <img src={img} alt="offer" />
      </div>
    </div>
    </>

  )
}

export default Offer