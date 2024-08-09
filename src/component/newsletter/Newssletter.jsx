import React from 'react'
import './newsletter.css'

const NewsLetter =() =>{
    return(
        <>
        <div className="bg-blur">
            <div className="newsletter">
                <h1>get exclusive offers on your mall</h1>
                <p>subscribe to our newsletter and stay updated</p>
                <div className="">
                    <input type="email" placeholder='Your Email id' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default NewsLetter;