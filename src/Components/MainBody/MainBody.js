import React from 'react';
import couple from '../../assets/14.png';
import './mainbody.css';
import couplepeople from '../../assets/8.png';

const MainBody = () => {
  return (
    <div className='mainbody'>
        <h1 className='mainHeader'>Kirjuta Oma Armastuse Lugu</h1>
        <p className='mainparagraph'>Armastuse raamat, mis jääb hinge paitama aastateks. 
            Lõbusad seiklused ja mälestused on väärt kirja panemist- teie personaalsesse raamatusse.
        </p>
        <h1 className='secondHeader'>Jäädvusta oma armulugu raamatusse</h1>
        <img src={couple} alt="" className='couplePicture'/>
        <input type="button" name="" value="Alusta armastuse raamatuga" className='submitNow'/>
        <h2 className='mainHeader'>Teie Armastuse Lugu Oma Raamatus! </h2>
        <p className='coupleparagraph2'>Pane kirja enda Armastuse lugu päris raamatusse ja jäädvustage oma kaunid mälestused igaveseks.</p>
        <div className='row couplesection'>
            <div className='col-lg-7'>
                <img src={couplepeople} alt="" className='couplePeople'/>                
            </div>
            <div className='col-lg-5 coupletextsection'>
                <h3 className='couplePeopleText'>Teie imeline armastuse lugu raamatus!</h3>
                <p className='coupleparagraph'>Personaalne kingitus oma kallimale. Tee oma partnerile, vanematele või vanavanematele 
                    aastapäeva puhul kingitus ja pane armastuse lugu päris raamatukaante vahele. 
                    Selles raamatus saad luua nii endale kui partnerile oma karakteri- täpselt selliste värvide 
                    ja kujutistega nagu te olete. Saad lehekülgedele panna kirja teie vahvad seiklused, rõõmud 
                    ja hingelised lood. See raamat on loodud selleks, et igaüks näeks end oma armastuse teel 
                    täpselt sellena, kes ta enda loos on- puudutades südant. Soojad lood toovad soojuse hinge…
                </p>
                
            </div>
        </div>
    </div>
  )
}

export default MainBody