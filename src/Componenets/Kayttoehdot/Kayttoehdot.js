import React from 'react';

import './Kayttoehdot.css';

const Kayttoehdot = () => {
    return ( 
        <div className="ehdot">
            <h1 className="HeadlineEhdot">AutoHeaven käyttöehdot</h1>
            <div className="taa">
            <div className="ehot">
                <h1 className="ehdotOtsikko">1. Yleistä</h1>
                <p className="paraEhdot">
                    Tämä verkkosivusto on AutoHeaven omistuksessa ja ylläpitämä. Käyttämällä tätä verkkosivustoa hyväksyt seuraavat käyttöehdot kokonaisuudessaan. Mikäli et hyväksy näitä ehtoja, älä käytä tätä verkkosivustoa.
                </p>

                <h1 className="ehdotOtsikko">2. Sivuston tarkoitus</h1>
                <p className="paraEhdot">
                    Tämä verkkosivusto tarjoaa tietoa AutoHeaven toiminnasta ja palveluista. Sivustolla voi myös olla yhteydenottolomake, jonka avulla voit ottaa yhteyttä meihin.
                </p>

                <h1 className="ehdotOtsikko">3. Vastuunrajoitus</h1>
                <p className="paraEhdot">
                    Emme takaa verkkosivuston tietojen täydellisyyttä tai tarkkuutta. AutoHeaven ei ole vastuussa mistään vahingoista tai menetyksistä, jotka johtuvat sivuston käytöstä.
                </p>

                <h1 className="ehdotOtsikko">4. Yhteydenottolomake</h1>
                <p className="paraEhdot">
                    Käyttäessäsi yhteydenottolomaketta sitoudut antamaan totuudenmukaiset ja ajantasaiset tiedot. AutoHeaven käsittelee antamiasi tietoja tietosuojaselosteemme mukaisesti.
                </p>

                <h1 className="ehdotOtsikko">5. Linkin kolmannen osapuolen sivuille</h1>
                <p className="paraEhdot">
                    Sivustomme saattaa sisältää linkkejä kolmansien osapuolten sivustoille. AutoHeaven ei ole vastuussa näiden sivustojen sisällöstä tai toiminnasta.
                </p>

                <h1 className="ehdotOtsikko">6. Muutokset käyttöehtoihin</h1>
                <p className="paraEhdot">
                    Pidätämme oikeuden muuttaa näitä käyttöehtoja ilman erillistä ilmoitusta. Käyttäjän vastuulla on tarkistaa ehdot säännöllisesti muutosten varalta.
                </p>

                <h1 className="ehdotOtsikko">7. Soveltuva laki</h1>
                <p className="paraEhdot">
                    Näitä käyttöehtoja hallitsee Suomen lainsäädäntö. Kaikkiin näihin ehtoihin liittyvät riidat pyritään ratkaisemaan sovinnollisesti, ja mikäli se ei ole mahdollista, riidat käsitellään Oulun käräjäoikeudessa.
                </p>
            </div>
            </div>
        </div>
     );
}
 
export default Kayttoehdot;