import React from 'react'
import './header.css'
import logo from '../../assets/logo2.png';
import cart from '../../assets/cart.png';


const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="logo" className='logoImage'/>
        <h2 className='logoText'>Armastuse Raamat</h2>
        <img src={cart} alt="" className='shoppingCart' />
    </div>
  )
}

export default Header