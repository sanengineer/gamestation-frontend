import React from "react";
import Logo from "../../assets/logo.svg";
import "./gamePlay.css";
import { useHistory } from 'react-router-dom';
import Back from "../../assets/back.png"


export const Header=()=>{
    const history = useHistory()
    return(
        <div className="row my-4 justify-content-start">
            <div className="col icon mt-2">
                <figure className="mr-5 my-auto">
                    <input type="image" alt="back-button" src={Back} onClick={()=> history.goBack()}></input>
                </figure>
                <img src={Logo} alt="logo" />
                <p className="title">ROCK PAPER SCISSORS</p>
            </div>
        </div>
    )
}