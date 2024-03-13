import React from "react";
import './Tietosuojakaytanto.css';

const Tietosuojakaytanto = () => {
    return ( 
        <div className="tietosuojakaytanto">
            <h1 className="HeadlineTieto">AutoHeaven Tietosuojakäytäntö</h1>
            <div className="keskita">
            <div className="seloste">
                <div className="osio">
                    <h3 className="osioHeadline">1. Henkilötietojen Käsittelyn Tarkoitus</h3>
                    <p className="oisoParagraph">
                        Käsittelemme henkilötietoja ainoastaan laillisesti ja asianmukaisesti määriteltyihin tarkoituksiin. 
                        Henkilötietoja kerätään pääasiassa AutoHeaven palveluiden tarjoamista, yhteydenottoihin vastaamista 
                        ja asiakassuhteiden ylläpitoa varten.
                    </p>
                </div>
                <div className="osio">
                    <h3 className="osioHeadline">2. Kerätyt Henkilötiedot</h3>
                    <p className="oisoParagraph">
                        Tyypillisiä kerättäviä henkilötietoja voivat olla nimi, sähköpostiosoite, 
                        puhelinnumero ja muut tarvittavat tiedot. Näitä tietoja kerätään käyttäjiltä heidän vapaaehtoisesti 
                        antamansa tietojen kautta.
                    </p>
                </div>
                <div className="osio">
                    <h3 className="osioHeadline">3. Tietojen Säilytysaika</h3>
                    <p className="oisoParagraph">
                        Henkilötietoja säilytetään vain niin kauan kuin ne ovat tarpeellisia käyttötarkoituksensa 
                        vuoksi tai sovellettavan lainsäädännön mukaisesti.
                    </p>
                </div>
                <div className="osio">
                    <h3 className="osioHeadline">4. Tietojen Suojaaminen</h3>
                    <p className="oisoParagraph">
                        Takaamme, että kaikki kerätyt henkilötiedot säilytetään turvallisesti. Käytämme asianmukaisia teknisiä 
                        ja organisatorisia keinoja tietojen suojaamiseksi luvattomalta pääsyltä, häviämiseltä, tuhoutumiselta 
                        tai muulta henkilötietojen käsittelyyn liittyvältä riskiltä.
                    </p>
                </div>
                <div className="osio">
                    <h3 className="osioHeadline">5. Tietojen Jakaminen Kolmansien Osapuolten Kanssa</h3>
                    <p className="oisoParagraph">
                        Emme jaa henkilötietoja kolmansien osapuolten kanssa ilman käyttäjän suostumusta, ellei se ole tarpeellista 
                        palveluiden tarjoamiseksi tai sovellettavan lain niin vaatiessa.
                    </p>
                </div>
                <div className="osio">
                    <h3 className="osioHeadline">6. Käyttäjän Oikeudet</h3>
                    <p className="oisoParagraph">
                        Käyttäjällä on oikeus tarkastella, korjata, tai pyytää poistamaan itsestään tallennetut henkilötiedot. 
                        Tällaiset pyynnöt tulee lähettää Office@Autoheaven.fi.
                    </p>
                </div>
                <div className="osio">
                    <h3 className="osioHeadline">7. Evästeet (Cookies)</h3>
                    <p className="oisoParagraph">
                        Verkkosivustomme voi käyttää evästeitä parantaakseen käyttökokemusta. Käyttäjällä on mahdollisuus 
                        hallita evästeasetuksia selaimen asetuksista.
                    </p>
                </div>
                <div className="osio">
                    <h3 className="osioHeadline">8. Yhteystiedot</h3>
                    <p className="oisoParagraph">
                        Kaikkiin kysymyksiin tai huomautuksiin tästä tietosuojakäytännöstä voi olls yhteydessä osoitteeseen Office@Autoheaven.fi .
                    </p>
                </div>
            </div></div>
        </div>
     );
}
 
export default Tietosuojakaytanto;