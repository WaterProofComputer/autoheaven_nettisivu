import React from "react";
import './contacts.css';
import mailImg from '../assets/mail_Img.png';
import { Link } from 'react-router-dom';
import {   animateScroll as scroll } from 'react-scroll';


const Contacts = ({ scrollToTop }) => {

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
        <div className="contact" id="contacts-section">
            <div className="textSection">
                <img src={mailImg} alt="letterImage" />
                <p className="textHeadline">Ota Yhteyttä</p>
                <p className="text">Lähetä meille viestiä jos on kysyttävää <br /> tai jos teillä on jotain palautetta<br /> ihan rohkeasti</p>
                {/* <button className="palaaBtn" onClick={scrollToTop}> Palaa alkuun </button> */}
                <Link className="palaaBtn" to="/?scrollTo=landing-section">Palaa alkuun</Link>
            </div>
            <form className="formSection">
                <p className="formHeadline">Lähetä viesti</p>
                <div className="form">
                    <div className="formRow">
                        <input label="Etunimi" placeholder="Etunimi" type="text" className="first" />
                        <input label="Sukunimi" placeholder="Sukunimi" type="text" className="last" />
                    </div>
                    <div className="formRow">
                        <input label="Email" placeholder="Email" type="text" className="email" />
                        <input label="Puhelinnumero" placeholder="Puhelinnumero" type="text" className="Puh" />
                    </div>
                    <div className="formRow">
                        <textarea label="Viesti" placeholder="Viestisi meille" type="text" className="viesti" />
                    </div>
                </div>
                <div className="formRowBtn">
                <button className="sendBtn" onClick={scrollToTop} >Lähetä</button>
                
                </div>
            </form>
        </div>
     );
}
 
export default Contacts;