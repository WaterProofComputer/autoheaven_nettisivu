import React from "react";
import './Tuotteet.css'

import { useNavigate } from "react-router-dom";

const Tuotteet = () => {
    const navigate = useNavigate();
    
    return ( 
        <div className="Tuotteet" id="tuotteet-section">
            <div className="otsikkocont">
            <br></br>
            <h1 className="otsikkotuote">Tuotevalikoima</h1>
            </div>
                <div className="tuote-container">
                    <div className="grid-container">
                        <a
                        href="/tuote/1"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(
                                `/tuote/1`,
                                { state: {
                                    data: {
                                        name: "Korrek Pro TFC Polymatrix pinnoite 350 ml",
                                        image: 'korrekpro.jpg',
                                        description: "Korrek Pro TFC Polymatrix on keraaminen pinnoite todella helppoon ja nopeaan omatoimiseen autonhoitoon. SiO2-pohjainen keraaminen pinnoite antaa autolleloistavan kiillon sekä suojan likaa ja UV-säteitä vastaan. Polymatrix-pinnoite muodostaa erittäin kestävän ja vettähylkivän suojan maali-, kumi-, muovi-, alumiini- ja kromipinnoille jopa kuudeksi kuukaudeksi. Pinnoite tekee auton pesemisestä helppoa, koska lika irtoaa pinnoilta vaivattomasti.",
                                        hinta: "23,99€",
                                        color: "red"
                                    }
                                }}
                            );
                        }}
                        >
                        <div class="grid-item">
                        <div className="tuotekuvacont">
                        <img className="tuotekuva"  src="/images/korrekpro.jpg"></img>
                        </div>
                        <div className="tuotedesc">
                        <h1 className="otsikkotuote">Korrek Pro TFC Polymatrix pinnoite 350 ml</h1>
                        <p className="tekstituote">23,99€</p>
                        </div>
                        </div>
                        </a>
                        <a
                        href="/tuote/2"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(
                                `/tuote/2`,
                                { state: {
                                    data: {
                                        name: "Motox De-Icer jäänpoistoaine 500 ml",
                                        image: 'jääainemotox.png',
                                        description: "Motox-jäänpoistoaineella sulatat jään auton laseista turvallisesti, nopeasti ja tehokkaasti lasia, tuulilasinpyyhkimen sulkia, listoja ja maalipintaa vahingoittamatta. Naarmuuntumisen vaaraa ei ole, toisin kuin perinteistä jäärapaa käyttäessä, koska jäänpoistoaine ei vaadi mekaanista työstöä. Lisäksi aine estää lasin jäätymistä uudelleen. Varmista aina, että pyyhkimen sulat eivät ole jäätyneet kiinni, jotta ne eivät menisi rikki ikkunalasista irrottaessa.",
                                        hinta: "3,99€",
                                        color: "darkgreen"
                                    }
                                }}
                            );
                        }}
                        >
                        <div class="grid-item">
                        <div className="tuotekuvacont">
                        <img className="tuotekuva"  src="/images/jääainemotox.png"></img>
                        </div>
                        <div className="tuotedesc">
                        <h1 className="otsikkotuote">Motox De-Icer jäänpoistoaine 500 ml</h1>
                        <p className="tekstituote">3,99€</p>
                        </div>
                        </div>
                        </a>
                        <a
                        href="/tuote/3"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(
                                `/tuote/3`,
                                { state: {
                                    data: {
                                        name: "KUNGS TELE-IS teleskooppi lumiharja jääraapalla",
                                        image: 'lumiharja.png',
                                        description: "Kotimainen Kungs Tele-Is on uusi teleskooppinen lumiharja, jossa on tukeva säädettävä alumiinivarsi sekä vaihdettava raappaosa. Säädettävä 77-105 cm pitkä teleskooppilumiharja helpottaa autoilijan lumisia ja jäisiä aamuja. Kungs-lumiharjamalliston pisimmän varren avulla ylettyy puhdistamaan myös paketti- ja tila-autot lumesta.",
                                        hinta: "11,90€",
                                        color: "darkgreen"
                                    }
                                }}
                            );
                        }}
                        >
                        <div class="grid-item">
                        <div className="tuotekuvacont">
                        <img className="tuotekuva"  src="/images/lumiharja.png"></img>
                        </div>
                        <div className="tuotedesc">
                        <h1 className="otsikkotuote">KUNGS TELE-IS teleskooppi lumiharja jääraapalla</h1>
                        <p className="tekstituote">11,90€</p>
                        </div>
                        </div>
                        </a>
                        <a
                        href="/tuote/4"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(
                                `/tuote/4`,
                                { state: {
                                    data: {
                                        name: "Bigboi Buddi puhallinkuivain",
                                        image: 'bigboi.png',
                                        description: "Bigboi Buddi -autonkuivauspuhallin kontaktittomaan auton kuivaamiseen. Ei jätä pyyhintäjälkiä ja vähentää maalipinnan naarmuuntumisen riskiä. Saat pesun jälkeen vettä tiputtamattomat kirkkaat peilit ja kuivat vanteet hetkessä. Kätevä kaikkiin kohteisiin, jotka on hankala saada heti kuivaksi perinteisellä kuivausliinalla. Koko auton kuivaamiseen suosittelemme Bigboi Mini puhallinta.",
                                        hinta: "49,90€",
                                        color: "darkgreen"
                                    }
                                }}
                            );
                        }}
                        >
                        <div class="grid-item">
                        <div className="tuotekuvacont">
                        <img className="tuotekuva"  src="/images/bigboi.png"></img>
                        </div>
                        <div className="tuotedesc">
                        <h1 className="otsikkotuote">Bigboi Buddi puhallinkuivain</h1>
                        <p className="tekstituote">49,90€</p>
                        </div>
                        </div>
                        </a>
                        <a
                        href="/tuote/5"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(
                                `/tuote/5`,
                                { state: {
                                    data: {
                                        name: "Kärcher FJ6 pesuainevaahdotin 0,6 l",
                                        image: 'pesuainevaahdotin.png',
                                        description: "Kärcher FJ 6 Foam Jet -pesuainevaahdotin tekee pesuaineesta paksun vaahdon, joka pysyy pestävällä pinnalla pitkään. Foam Lance-pesuainevaahdottimella työskentely lisää puhdistustehoa, koska se mahdollistaa pidemmän pesuaineen vaikutusajan. Pesuaine lisätään säiliöön ja suutin kiinnitetään pesukahvaan. Pesuaineen annostelu kätevästi suoraan vaahdotussuuttimesta.",
                                        hinta: "29,90€",
                                        color: "darkgreen"
                                    }
                                }}
                            );
                        }}
                        >
                        <div class="grid-item">
                        <div className="tuotekuvacont">
                        <img className="tuotekuva"  src="/images/pesuainevaahdotin.png"></img>
                        </div>
                        <div className="tuotedesc">
                        <h1 className="otsikkotuote">Kärcher FJ6 pesuaine vaahdotin 0,6 l</h1>
                        <p className="tekstituote">29,90€</p>
                        </div>
                        </div>
                        </a>
                        <a
                        href="/tuote/6"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(
                                `/tuote/6`,
                                { state: {
                                    data: {
                                        name: "Sparco Auton rikkaimuri 12V",
                                        image: 'imuri.png',
                                        description: "Tehokas sykloni tekniikkaan perustuva 12V imuri tupakansytytin pistokkeella. Ergonominen muotoilu. Erinomainen apu auton siivoukseen. Vaihdettava teräs Hepa suodatin. Äänitaso alle 80db.",
                                        hinta: "34,90€",
                                        color: "red"
                                    }
                                }}
                            );
                        }}
                        >
                        <div class="grid-item">
                        <div className="tuotekuvacont">
                        <img className="tuotekuva"  src="/images/imuri.png"></img>
                        </div>
                        <div className="tuotedesc">
                        <h1 className="otsikkotuote">Sparco Auton rikkaimuri 12V</h1>
                        <p className="tekstituote">34,90€</p>
                        </div>
                        </div>
                        </a>
                    </div>
            </div>
        </div>
     );
}
 
export default Tuotteet;