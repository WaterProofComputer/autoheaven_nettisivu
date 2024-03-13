import React from "react";
import video from "../assets/Video1.mp4";
import phooto from "../assets/toimipaikat_img.jpg"
import './landing.css'


const landing = () => {
    return ( 
        <div className="landing" id="landing-section">
           <video className="video" src={video} autoPlay muted></video> 
           
           <div className="overlayText">
            <h1>AutoHeaven - Missä autosi loistaa kirkkaammin kuin mikään taivaankappale. Palvelumme on enemmän kuin pesu, se on autollesi taivas maan päällä.</h1>
           </div>
        </div>
     );
}
 
export default landing;