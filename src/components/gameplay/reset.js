import React from "react";
import Refresh from "../../assets/refresh.png";

export const Reset=({resetState,reset})=>{
    if(resetState){
        return(
            <div className="text-center" >
                <figure id="refresh " className="col img-hover" onClick={()=>reset()}>
                    <img id="reset-button" alt="reset" src={Refresh}></img>
                </figure>
            </div>
        )
    } else {
        return null
    }
}