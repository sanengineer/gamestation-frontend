import React, { Component } from 'react';
import {Container,Row,Col } from 'react-bootstrap';
import Stone from "../../assets/stone.png";
import Paper from "../../assets/paper.png";
import Scissors from "../../assets/scissors.png";
import {Result} from "./result";
import "./gamePlay.css";
import {Reset} from "./reset.js";
import {Header} from "./header.js"



class Gameplay extends Component{

    state={
        matchResult:"",
        resetState:false
    }

    playerClick=(idClick)=>{
        document.getElementById(idClick).classList.add("chosen");
        this.disableClick();
        this.comSelect(idClick);
    }

    disableClick=()=>{
        document.querySelectorAll(".player").forEach((i)=>{
            i.classList.remove("img-hover");
            i.setAttribute('disabled','disabled');
        })
    }

    comSelect= async(idClick)=>{
            let arrComputerChoice = ["com-stone","com-scissors","com-paper"];
            let computerChoice = await arrComputerChoice[Math.floor(Math.random() *3)]
            document.getElementById(computerChoice).classList.add('chosen');
            this.matchResult(idClick,computerChoice)
            
            console.log(`Player Choosing ${idClick}`);
            console.log(`Computer Choosing ${computerChoice}`);
    }

    matchResult= async (idClick,computerChoice)=>{
        let classId;
        if(idClick==="stone"){
            switch(computerChoice){
                case "com-stone" : classId = "draw";
                break;
                case "com-scissors" : classId = "player-win"
                break;
                case "com-paper" : classId = "com-win"
                break;
                default : return null
            }
        } else if(idClick === "scissors"){
            switch(computerChoice){
                case "com-stone": classId = "com-win"
                break;
                case "com-scissors": classId = "draw"
                break;
                case "com-paper" : classId = "player-win"
                break;
                default : return null
            }
        } else{
            switch(computerChoice){
                case "com-stone": classId = "player-win"
                break;
                case "com-scissors": classId = "com-win"
                break;
                case "com-paper" : classId = "draw"
                break;
                default : return null
            }
        }
        this.setState({matchResult:classId,resetState:true});
        console.log(`match result ${classId}`)
    }

    reset=()=>{
        console.log("resetting . . .");
        document.querySelectorAll(".player").forEach(k=>{
            k.removeAttribute('disabled');
            k.classList.add("img-hover");
        });
        document.querySelectorAll("figure").forEach(l => {
            l.classList.remove('chosen');
        });
        this.setState({matchResult:"",resetState:false});
    }
    
    render(){
        return(
            <div className="gameplay pt-2">
            <Container>
                <Header/>
                <Row>
                    <Col>
                        <div className="d-flex flex-column text-center col-player">
                            <h1 className="pt-3">PLAYER</h1>
                            <figure id="stone">  
                                <input className="player img-assets img-hover" alt="stone" type="image" src={Stone} onClick={()=>this.playerClick("stone")}></input>
                            </figure>
                            <figure id="paper">
                                <input className="player img-assets img-hover " alt="paper" type="image" src={Paper} onClick={()=>this.playerClick("paper")}></input>
                            </figure>
                            <figure id="scissors">
                                <input className="player img-assets img-hover" alt="scissors" type="image" src={Scissors} onClick={()=>this.playerClick("scissors")}></input>
                            </figure>
                        </div>
                    </Col>
                    <Col>
                        <Result 
                        className="result"
                        matchResult={this.state.matchResult}
                        />
                        <Reset
                        resetState={this.state.resetState}
                        reset={()=>this.reset()}
                        />
                    </Col>
                    <Col>
                        <div className="d-flex flex-column text-center">
                            <h1 className="pt-3">COMPUTER</h1>
                            <figure id="com-stone">
                                <input className="com img-assets" alt="stone" type="image" src={Stone}></input>
                            </figure>
                            <figure id="com-paper">
                                <input className="com img-assets" alt="paper" type="image" src={Paper}></input>
                            </figure>
                            <figure id="com-scissors">
                                <input className="com img-assets" alt="scissors" type="image" src={Scissors}></input>
                            </figure>
                        </div>
                    </Col>
                </Row>
            </Container>   
            </div>             
        )
    }
}

export default Gameplay;