import React from "react";
import './1_Tuote.css'

import { useLocation } from 'react-router-dom';


const Tuote1 = () => {
    const location = useLocation();
    const { data } = location.state || {};

    console.log(data);

    return ( 
        <div className="Tuote1">
            <div className="tuotecontainer">
                <div className="tuotekuvasäilö">
                    <img className="kuvatuote123" src={`/images/${data.image}`}></img>
                </div>
                <div className="tuoteesittely">
                    <h1 className="tuote1otsikko">{data.name}</h1>
                    <p className="tuote1teksti">{data.description}</p>
                    <div className="hintasaatavuus">
                        <p className="hintatext">{data.hinta}</p>
                        <p className="saatavuustext">Saatavuus:</p>
                        <div className="saatavuuscontainer">
                            <div className="saatavuustilanne" style={{backgroundColor: data.color}}>
                            </div>
                            <div className="saatavuustextcont">
                                <p className="saatavuustext">
                                Oulu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>
        </div>
     );
}
 
export default Tuote1;