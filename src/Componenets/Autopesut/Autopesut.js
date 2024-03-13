import React from "react";

import './autopesut.css';
import KasipesuImg from '../assets/kasipesu_img.jpg';
import KemiallinenImg from '../assets/kemiallinen_img.jpg';
import DetailingImg from '../assets/detailing_img.jpg';
import ItsepalveluImg from '../assets/itsepalvelu_img.jpg';
import WaxImg from '../assets/wax_img.jpg';
import SteamImg from '../assets/steam_img.jpg';


const Autopesut = () => {
    return (
        <div className="autopesut" id="autopesut-section">
            <div className="Headline">
                <h1>Yrityksemme tarjoamat palvelut.</h1>
            </div>
           <div className="options">
                <div className="option">
                    <p className="optionHead">Perinteinen käsipesu</p>
                    <img src={KasipesuImg} alt="Käsipesu Image" className="optionImage" />
                    <p className="optionPrice">30€</p>
                </div>
                <div className="option">
                    <p className="optionHead">Kemiallinenpesu</p>
                    <img src={KemiallinenImg} alt="Kemiallinenpesu Image" className="optionImage" />
                    <p className="optionPrice">45€</p>
                </div>
                <div className="option">
                    <p className="optionHead">Höyrypesu</p>
                    <img src={SteamImg} alt="Höyrypesu Image" className="optionImage" />
                    <p className="optionPrice">35€</p>
                </div>
                <div className="option">
                    <p className="optionHead">Itsepalvelupesuasema</p>
                    <img src={ItsepalveluImg} alt="Itsepalvelupesuasema Image" className="optionImage" />
                    <p className="optionPrice">25€</p>
                </div>
                <div className="option">
                    <p className="optionHead">Pesu ja vahaus</p>
                    <img src={WaxImg} alt="Pesu ja vahaus Image" className="optionImage" />
                    <p className="optionPrice">70€</p>
                </div>
                <div className="option">
                    <p className="optionHead">Detailing pesu</p>
                    <img src={DetailingImg} alt="Detailing pesu Image" className="optionImage" />
                    <p className="optionPrice">60€</p>
                </div>
            </div>
        </div>
      );
}
 
export default Autopesut;