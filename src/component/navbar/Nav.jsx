import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets (1)/Assets/logo.png'
import { FaCartShopping } from "react-icons/fa6"

const Nav = () => {
  return (
    <>
    <nav className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPING</p>
      </div>
      <ul className="nav-menu">
        <Link to="/"><li>Shop</li></Link>
        <Link to="mens"><li>Men</li></Link>
        <Link to="women"><li>Women</li></Link>
        <Link to="kids"><li>Kids</li></Link>
      </ul>
      <div className="nav-login-cart">
        {/* <button>Login</button> */}
        <FaCartShopping size={30}/>
        <div className="count">0</div>
      </div>
    </nav>
    </>

  )
}

export default Nav