import React from "react";
import Logo from "../../assets/logo.svg";
import "./gamePlay.css";
import Back from "../../assets/back.png"


export const Header=({quitGame})=>{
    return(
        <div className="row my-1 mx-auto justify-content-start">
            <div className="col icon mt-2">
                <figure className="mr-5 my-auto">
                    <input className="logo" type="image" alt="back-button" src={Back} onClick={()=> quitGame()}></input>
                </figure>
                <img className="logo" src={Logo} alt="logo" />
                <p className="title">ROCK PAPER SCISSORS</p>
            </div>
        </div>
    )
}