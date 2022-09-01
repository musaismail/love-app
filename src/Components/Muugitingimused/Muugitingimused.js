import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Menu from '../Menus/Menu'
import './muugit.css';
import { Link } from 'react-router-dom';
const Muugitingimused = () => {
  return (
    <div className='container-fluid'>
        <Header/>
        <nav className='row rowF'>
            <Link to="/" className='col-lg-3 column'>Avaleht</Link>
            <Link to="/kuidastellida" className='col-lg-3 column'>Kuidas tellida</Link>
            <Link to="/hinnad" className='col-lg-3 column'>Hinnad</Link>
            <Link to="/kontakt" className='col-lg-3 column'>Kontakt</Link>
        </nav>
        <div className='muugitRegion'>
            <h2 className='muugitHeader'>Müügitingimused</h2>
            <p className='informationmuugit'>1. Müügitingimuste kehtivus</p>
            <ol>
                <li>Müügitingimused kehtivad ARMASTUSERAAMAT.
                    EE veebipoest ostja (edaspidi Tarbija) ja ettevõtja S 
                    GOURMIFY OÜ vahel kaupade ja teenuste ostmisel.
                </li>
                <li>S GOURMIFY  OÜ juriidilised andmed: PÖÖRISE 10-78 13502, Harjumaa, 
                    Eesti. Reg nr 14932180, Kontaktandmed: siim@gourmify.ee
                </li>
                <li>Lisaks käesolevatele tingimustele reguleerivad armastuseraamat.ee veebipoest toodete ostmisel tekkivaid õigussuhteid Eesti Vabariigis kehtivad 
                    võlaõigusseadus (edaspidi VÕS), 
                    tarbijakaitseseadus (edaspidi TKS) ja teised õigusaktid. 
                </li>
                <li>Veebipood armastuseraamat.ee jätab endale õiguse teha müügitingimustes muudatusi. 
                Nimetatud muudatusi kajastatakse veebilehel
                </li>
            </ol>
            <p className='informationmuugit'>2. Hinnainfo</p>
            <ol>
                <li>Veebipoes armastuseraamat.ee toodud hinnad sisaldavad käibemaksu.</li>
                <li>Ostuhinnale lisandub transpordi hind vastavalt Tarbija valitud tarneviisile. 
                    Kui tellimus on esitatud enne müügitingimuste või hindade muutmist, 
                    kohaldatakse Tarbija ja armastuseraamat vahel tekkinud õigussuhetele tellimuse vormistamise ajal kehtinud tingimusi. 
                    Veebipood armastuseraamat.ee jätab endale õiguse teha müügihindades muudatusi.
                </li>
            </ol>
            <p className='informationmuugit'>3. Tellimuse vormistamine</p>
            <ol>
                <li> Lisage soovitud tooted ostukorvi.</li>
                <li>Tellimuse vormistamiseks vajutage kõigepealt ostukorvis lingile „Lisa ostukorviˮ.</li>
                <li>Tellimuse vormistamise lehel täitke nõutud andmeväljad, valige teile sobiv toodete kohaletoimetamise viis ja vajutage lingile „maksmaˮ. 
                    Seejärel kuvatakse ekraanile arve, mille saate tasuda mugavalt pangalingi kaudu (Swedbank, SEB, LHV, Coop, Luminor, Mtasku) 
                    või krediitkaardiga (Visa, Mastercard). Isikuandmete vastutav töötleja on S gourmify OÜ. 
                    S gourmify OÜ edastab maksete teostamiseks vajalikud isikuandmed volitatud töötlejale Montonio Finance-le.  
                </li>
                <li>Märkige linnuke lahtrisse “Olen tutvunud veebilehe müügitingimustega ning meie privaatsuspoliitikaga ja nõustun nendega”.</li>
                <li>Veebipoes sooritatud tellimusi käsitletakse igal tööpäeval 10.00-16.00 . 
                    Kui tellimus esitatakse reedel pärast kella 12.00, 
                    võidakse tellimus vormistada alles järgneval tööpäeval.
                </li>
                <li>Tellimuse väljasaatmiseks kulub armastuseraamat.ee-l keskmiselt 1-3 tööpäeva sõltuvalt valitud kohaletoimetamise viisist.</li>
            </ol>
            <p className='informationmuugit'>4. Müügilepingu jõustumine</p>
            <ol>
                <li>Kauba müügilepinguga kohustub veebipood loomalepai.ee andma Tarbijale üle olemasoleva, valmistatava või veebipood armastuseraamat.
                    ee poolt tulevikus omandatava Kauba ning tegema võimalikuks omandi ülemineku Tarbijale, 
                    Tarbija aga kohustub veebipood armastuseraamat.ee-le tasuma Kauba eest esitatud arvel näidatud summa ja võtma Kauba vastu.
                </li>
                <li>Tellimused, mille eest ei ole tasutud, tühistatakse 7 päeva möödudes alates tellimuse vormistamisest</li>
                <li>Müügileping jõustub pärast Tarbija tehtud makse laekumist Veebipoe pangakontole.</li>
            </ol>
            <p className='informationmuugit'>5. Kohaletoimetamine</p>
            <ol>
                <li>Pärast müügilepingu jõustumist komplekteerib veebipood loomalepai.
                    ee tellimuse ning annab selle kohaletoimetamiseks üle ettevõtte logistikapartneritele. 
                    Juba vormistatud tellimust ei ole enam võimalik tühistada.
                </li>
                <li>loomalepai.ee veebilehel näidatud kohaletoimetamise tähtajad kehtivad tellimuse summa laekumise hetkest 
                    Veebipoe pangakontole. Keskmiselt on kohaletoimetamise aeg 1-3 tööpäeva. 
                </li>
                <li>Kui kaup ei ole mõistliku aja jooksul Kliendini jõudnud tuleb kontakteeruda e-posti teel siim@gourmify.ee, 
                    et kontrollida saaja andmete õigsust. Adressaadile mitte kohale jõudnud tellimuste eest, 
                    mis on armastuseramaat.ee-le logistikapartneri poolt tagasi saadetud, kantakse 
                    Kliendile raha tagasi 7 tööpäeva jooksul alates tagastatud tellimuse kohaletoimetamise päevast.
                </li>
                <li>Veebipood armastuseraamat.ee ei vastuta kauba kohaletoimetamise viibimise eest juhul, kui kaup on logistika partneritele üle antud õigel ajal, 
                    kuid kohaletoimetamise viibimine on tingitud asjaoludest, 
                    mida veebipood loomalepai.ee ei saanud mõjutada ega ette näha.
                </li>
            </ol>
            <p className='informationmuugit'>6. Tagastamisõigus</p>
            <ol>
                <li>Pärast tellimuse kättesaamist on Tarbijal õigus e-poes sõlmitud lepingust taganeda põhjust avaldamata 14 päeva jooksul. 
                    Oma soovist kaup tagastada tuleb esmalt ühendust võtta Siim@gourmify.ee. Kirjas palume märkida tellimuse number, 
                    tellija andmed ning toode mida soovitakse tagastada.
                </li>
                <li>Tagastamisele kuuluv kaup peab olema rikkumata, kasutamata ja originaalpakendis. 
                    Kaup on võimalik tagastada postitades see sama pakiautomaadi kaudu, kust pakk kätte saadi. 
                    Kauba tagasisaatmisel kannab saatmiskulu ostja. Kui teieni on jõudnud vale kaup või kui kaup on saanud transpordi käigus kahjustada, 
                    siis palun võtke ühendust info@loomalepai.ee. 
                </li>
                <li>Veebipood armastuseraamati.ee tagastab tagastatava kauba kättesaamisel ostjale viivitamata, 
                    kuid mitte hiljem kui 14 päeva möödumisel arvates taganemisavalduse saamisest, kõik ostjalt 
                    lepingu alusel saadud tasud. Veebipood võib keelduda tagasimaksete tegemisest seni, kuni on 
                    lepingu esemeks oleva asja tagasi saanud või kuni ostja on esitanud tõendid, et on asja tagasi 
                    saatnud, sõltuvalt sellest, kumb toimub varem. 14-päevane tagastusõigus ei kehti sellise suletud 
                    pakendis asja üleandmisel, mis ei ole kõlblik tagasisaatmiseks tervisekaitse või hügieenilistel 
                    põhjustel ning kui see on pärast kohaletoimetamist avatud.
                </li>
            </ol>
            <p className='informationmuugit'>7. Isikuandmete töötlemine</p>
            <ol>
                <li>Veebipood loomalepai.ee on isikuandmete vastutav töötleja. 
                    Veebipood loomalepai.ee edastab maksete teostamiseks vajalikud 
                    isikuandmed volitatud töötleja Montonio Finance-ile. 
                </li>
                <li>Tarbija annab veebipoes andmeid sisestades ning vastava kinnitusega õiguse koguda ja töödelda Tarbija isikuandmeid 
                    (nimi, kontakttelefon, paki kättetoimetamise ja/või kodune aadress, 
                    e-postiaadress) ning edastada logistikapartnerile isikuandmeid kauba kohaletoimetamiseks.
                </li>
                <li>Veebipoel loomalepai.ee on õigus kasutada Tarbija elu- või asukoha aadressi reklaami ja muu informatsiooni edastamiseks Tarbijale.</li>
                <li>Tarbijal on igal ajal õigus keelata oma isikuandmete kogumine ning kasutamine, välja arvatud juhul, 
                    kui see on vajalik lepingust tuleneva nõude sissenõudmiseks või kauba kohaletoimetamiseks.
                </li>
                <li>Krüpteeritud andmeside pankadega ostude eest tasumisel tagab Tarbija personaalsete 
                    pangatunnuste turvalisuse ja neile puudub ka Veebipoel ligipääs.
                </li>
            </ol>
            <p className='informationmuugit'>8. Pretensiooni esitamise õigus</p>
            <ol>
                <li>Veebipood loomalepai.ee vastutab ostjale müüdud kauba lepingutingimustele mittevastavuse või 
                    puuduse eest, mis oli olemas juba asja üleandmise hetkel ning mis ilmneb kuni ühe kuu jooksul, 
                    alates kauba üleandmisest ostjale. Sellest esimese kuu jooksul asja üleandmisest ostjale eeldatakse,
                    et puudus oli olemas juba asja üleandmise ajal. Ostjal on õigus puuduse ilmnemisel pöörduda 
                    hiljemalt ühe kuu jooksul veebipoe poole, saates e- kirja aadressile siim@gourmify.ee.
                </li>
                <li>Veebipood ei vastuta puuduste eest, mis on tekkinud pärast kauba üleandmist ostjale.
                     Kui Veebipoest ostetud kaubal on puudused, mille eest Veebipood vastutab, parandab või asendab 
                     Veebipood puudusega kauba. Kui kaupa ei ole võimalik parandada ega asendada, tagastab Veebipood ostjale kõik müügilepinguga kaasnenud tasud. 
                    Veebipood vastab tarbija esitatud kaebusele kirjalikult või kirjalikku taasesitamist võimaldavas vormis 14 päeva jooksul.
                </li>
            </ol>

            
        </div>
        <Footer/>
    </div>
  )
}

export default Muugitingimused