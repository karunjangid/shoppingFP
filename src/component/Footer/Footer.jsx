import React from 'react'
import { FaInstagram,FaFacebook } from "react-icons/fa6";
import { FaGithubSquare,FaTwitter } from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-logo">
            <p>SHOPPING</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offers</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="foter-social-icons">
            <div className="icons-container">
            <FaInstagram />
            </div>
            <div className="icons-container">
            <FaFacebook />
            </div>
            <div className="icons-container">
            <FaGithubSquare />
            </div>
            <div className="icons-container">
            <FaTwitter />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>&#169 2024 @ all</p>
        </div>
    </div>
    </>
)
}

export default Footer