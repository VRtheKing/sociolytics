import React from "react";
import { ReactDOM } from "react";
import wave from './images/wave.svg'
import illustration from './images/illustartion.svg'

function HomePage(){

    return (
        <div>
            <div className="content">
                <div className="usp">Improve your audience engagement by using our powerful analytics tool</div>
                <div className="illustrate">
                    <img src={illustration} alt="Illustration" />
                </div>
            </div>
            <img src={wave} alt="" className="wave"/>
        </div>
    )
    
}

export default HomePage;