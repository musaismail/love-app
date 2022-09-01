import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Menu from '../Menus/Menu'
import './hinnad.css';
import {Link} from 'react-router-dom'

const Hinnad = () => {
  return (
    <div className='container-fluid'>
        <Header/>
        <nav className='row rowF'>
            <Link to="/" className='col-lg-3 column'>Avaleht</Link>
            <Link to="/kuidastellida" className='col-lg-3 column'>Kuidas tellida</Link>
            <Link to="/hinnad" className='col-lg-3 column'>Hinnad</Link>
            <Link to="/kontakt" className='col-lg-3 column'>Kontakt</Link>
        </nav>
        <div className='hinnadRegion'>
            <h2 className='mainHeading'>Lisainfo:</h2>
            <p className='information'>Raamatu suurus: 21 x 15 cm</p>
            <p className='information'>Raamatut on võimalik valida kaht eri tüüpi:</p>
            <ul>
                <li className='listprice'>Tugevad kaaned : price x *</li>
                <li className='listprice'>Pehmed kaaned: price xx*</li>
            </ul>
            <p className='this-info'>*Hinnale lisandub postikulu</p>
            <p className='information'>Raamatu tegemisel on kasutatud kvaliteetseid materjale, mis on loodud kestma just nagu Teie armulugu - Igavesti</p>
            <input type="button" className='makePurchase' name="" value="Alusta armastuse raamatuga" />
            
        </div>
        <Footer/>
    </div>
  )
}

export default Hinnad