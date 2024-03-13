import React from 'react';
import { Link } from 'react-router-dom';
import {   animateScroll as scroll } from 'react-scroll';
import './footer2.css';
import Ig from '../assets/instagram.png';
import Face from '../assets/facebook-icon.png';
import Twitter from '../assets/twitter.png';
import Phone from '../assets/phoneIcon.png';
import Email from '../assets/email_Icon.png';
import House from '../assets/hous_Icon.png';




const Footer2 = () => {

    

    const scrollToTopAndNavigate = (route) => {
        // Scroll to the top with smooth animation
        scroll.scrollToTop({
          duration: 100, // Adjust the duration as needed
          smooth: 'easeInOutQuart', // You can try different easing functions
        });
    
        // After scrolling, navigate to the desired route
        window.location.href = route; // Use window.location.href for page navigation
      };
    return ( 
        <div className="footer">
            
            <div className="socials">
                <div className="paragraph">Ole aina ajantasalla meidän someissa!</div>
                <div className="socialBtns">
                    <a href='https://www.instagram.com/'>
                    <img src={Ig} alt="Instagram Icon" className="socialImg" />
                    </a>
                    <a href='https://www.facebook.com/'>
                    <img src={Face} alt="Facebook Icon" className="socialImg" />
                    </a>
                    <a href='https://twitter.com/'>
                    <img src={Twitter} alt="Twitter Icon" className="socialImg" />
                    </a>
                </div>
            </div>
            <div className="footerDownSection">
                <div className="infoSection">
                    <h1 className="sectionHeadline">AutoHeaven</h1>
                    <p className="sectionInfoText">AutoHeaven on kahden nuoren miehen <br /> perustama autonpesu yritys jolla on <br /> suuret tavoitteet tulevaisuudessa</p>
                </div>
                <div className="navSection">
                    <h1 className="sectionHeadline">Siirry sivulla</h1>
                    <Link className="navLink" to="/?scrollTo=landing-section">Etusivu</Link>
                    <Link className="navLink" to="/?scrollTo=about-section">Tietoa</Link>
                    <Link className="navLink" to="/?scrollTo=autopesut-section">Autopesut</Link>
                    <Link className="navLink" to="/?scrollTo=tuotteet-section">Tuotteet</Link>
                    <Link className="navLink" to="/?scrollTo=contacts-section">Ota yhteyttä</Link>
                </div>
                <div className="ehdotSection">
                    <h1 className="sectionHeadline">Ehdot</h1>
                    <div className="ehdotLink" onClick={() => scrollToTopAndNavigate('/KayttoehdotPage')}> Käyttöehdot </div>
                    <div className="ehdotLink" onClick={() => scrollToTopAndNavigate('/TietosuojakaytantoPage')}> Tietosuojakäytäntö </div>
                    <div className="ehdotLink" onClick={() => scrollToTopAndNavigate('/oikeudellisettiedot')}>Oikeudelliset tiedot</div>
                    <div className="ehdotLink"onClick={() => scrollToTopAndNavigate('/eula')}>EULA</div>
                 </div>
                <div className="addresSection">
                    <h1 className="sectionHeadline">Yhteystiedot</h1>
                    <div className="rivit">
                    <div className="yhteysRivi">
                        <img className='yhteysIcon' src={House} alt="Osoite Icon" />
                        <p className="osoite">Mikonkatu 17 00100 Helsinki Finland</p>
                    </div>
                    <div className="yhteysRivi">
                        <img className='yhteysIcon' src={Email} alt="Sähköposti Icon" />
                        <p className="email">Office@Autoheaven.fi</p>
                    </div>
                    <div className="yhteysRivi">
                        <img className='yhteysIcon' src={Phone} alt="Puhelin Icon" />
                        <p className="puhNro">0600 90 211</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p className="copyrightText">© 2023 Copyright: AutoHeaven</p>
            </div>
        </div>
     );
};
 
export default Footer2;