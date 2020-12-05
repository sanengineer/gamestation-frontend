import React from "react";
import "./gamePlay.css"

export const Result =({matchResult})=>{

     switch(matchResult){
        case "player-win":{
            return(
                 <div className="result text-center rounded">
                     <h1>PLAYER</h1>
                     <h1>WIN</h1>
                 </div>
            );
        }

        case "draw" :{
            return(
                <div className="result text-center rounded">
                    <h1>DRAW</h1>
                </div>
            )
        }

        case "com-win":{
            return (
                <div className="result text-center rounded">
                    <h1>COM</h1>
                    <h1>WIN</h1>
                </div>
            );
        }

        default :{
            return(
                <h1 className="text-danger text-center vs">VS</h1>
            );
        }
     }
        
}