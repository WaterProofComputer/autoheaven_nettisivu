import React from 'react';
import './oikeudellisettiedot.css';

function Oikeudellisettiedot() {
  return (
    <div className="joku">
    <h1 className="oikeuspaaotsikko">AutoHeaven - Yrityksen Oikeudelliset Tiedot</h1>
    <div className="tietot">
        <div className='oikeuslaatikko'>
        <h1 className='oikeusotsikko'>1. Yrityksen tiedot:</h1>
        <p className="oikeusteksti">AutoHeaven Autopesula Oy
        Osoite: Esimerkkikatu 123, 00100 Helsinki
        Y-tunnus: 1234567-8
        Puhelin: 012 345 678
        Sähköposti: info@autoheaven.fi
        Verkkosivusto: www.autoheaven.fi</p>
        <h1 className="oikeusotsikko">2. Yrityksen omistus:</h1>
        <p className="oikeusteksti">AutoHeaven Autopesula on yksityisomisteinen yritys. Omistaja: [Omistajan nimi]</p>
        <h1 className="oikeusotsikko">3. Yrityksen palvelut:</h1>
        <p className="oikeusteksti">AutoHeaven Autopesula tarjoaa laadukkaita autonpesupalveluita asiakkailleen. Palveluihin voi kuulua erilaisia pesutapoja, vahauksia ja sisäpuhdistuksia.</p>
        <h1 className="oikeusotsikko">4. Hinnat ja maksuehdot:</h1>
        <p className="oikeusteksti">Yrityksen voimassa olevat hinnat löytyvät verkkosivustolta tai asiakaspalvelusta. Maksuehdot voivat vaihdella palvelun mukaan, ja ne on esitetty selkeästi laskulla tai maksusivustolla.</p>
        <h1 className="oikeusotsikko">5. Vastuunrajoitus:</h1>
        <p className="oikeusteksti">AutoHeaven Autopesula pyrkii tarjoamaan parasta mahdollista palvelua, mutta ei ole vastuussa asiakkaan aiheuttamista vahingoista tai virheistä, kuten virheellisistä autojen tiedoista tai laiminlyönneistä pesutoiveiden ilmoittamisessa.</p>
        <h1 className="oikeusotsikko">6. Tietosuoja:</h1>
        <p className="oikeusteksti">Yritys sitoutuu suojelemaan asiakkaiden henkilötietoja noudattamalla voimassa olevia tietosuojalakeja. Lisätietoja yrityksen tietosuojakäytännöistä löytyy tietosuojaselosteesta.</p>
        <h1 className="oikeusotsikko">7. Sopimuksen purkaminen:</h1>
        <p className="oikeusteksti">Yrityksellä on oikeus purkaa palvelusopimus, mikäli asiakas rikkoo sovittuja ehtoja. Asiakkaan on noudatettava sopimuksen irtisanomisehtoja ja lopetettava palvelun käyttö välittömästi.</p>
        <h1 className="oikeusotsikko">8. Oikeudellinen päivitys:</h1>
        <p className="oikeusteksti">AutoHeaven Autopesula voi päivittää näitä oikeudellisia tietoja ilmoittamalla muutoksista verkkosivuillaan tai suoraan asiakkaille.</p>

        </div>
    </div>
    </div>
  );
}

export default Oikeudellisettiedot;