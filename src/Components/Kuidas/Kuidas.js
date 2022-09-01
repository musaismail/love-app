import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Menu from '../Menus/Menu'
import './kuidas.css';
import farewell from '../../assets/5.png';
import { Link } from 'react-router-dom';
const Kuidas = () => {
  return (
    <div className='container-fluid'>
        <Header/>
        <nav className='row rowF'>
            <Link to="/" className='col-lg-3 column'>Avaleht</Link>
            <Link to="/kuidastellida" className='col-lg-3 column'>Kuidas tellida</Link>
            <Link to="/hinnad" className='col-lg-3 column'>Hinnad</Link>
            <Link to="/kontakt" className='col-lg-3 column'>Kontakt</Link>
        </nav>
        <h2 className='howToMainText'>Kuidas tellida</h2>
        <div className='mainKuidas row'>
            
            <div className='col-lg-7'>
            
            <p className='howtoparagraph'>Tellimine on sama lihtne nagu hingamine.</p>
            <p className='howtoparagraph'>Loo enda ja partneri karakter.</p>
            <p className='howtoparagraph'>Muuda raamatu lehe teksti: kirjuta sinna personaalne mõte või sõnum mõnest sündmusest, mis hinge on puudutanud.</p>
            <p className='howtoparagraph'>Meie paneme kokku vastavalt sinu loodud mustandile päris raamatu, trükime selle ära ja saadame sinu poolt valitud postiautomaati.</p>
            
            </div>
            <div className='col-lg-5'>
                <img src={farewell} alt="" className='farewell'/>
            </div>
            <input className='submitInfor' type="" name="" value="Alusta raamatuga siit" />
            
            
        </div>
        <Footer/>
    </div>
  )
}

export default Kuidas