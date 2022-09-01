import React from 'react'
import './menus.css'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div className='menus'>
        <nav className='row rowF'>
            <Link to="/" className='col-sm-3 col-xs-3 column'>Avaleht</Link>
            <Link to="/kuidastellida" className='col-sm-3 col-xs-3 column'>Kuidas tellida</Link>
            <Link to="/hinnad" className='col-sm-3 col-xs-3 column'>Hinnad</Link>
            <Link to="/kontakt" className='col-sm-3 col-xs-3 column'>Kontakt</Link>
        </nav>
    </div>
  )
}

export default Menu