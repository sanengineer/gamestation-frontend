import React, { Component } from 'react';
import {Container,Row,Col } from 'react-bootstrap';
import Stone from "../../assets/stone.png";
import Paper from "../../assets/paper.png";
import Scissors from "../../assets/scissors.png";
import {Result} from "./result";
import "./gamePlay.css";
import {Reset} from "./reset.js";
import {Header} from "./header.js"
import {ModalsConfirm} from "./modalsConfirm"
import {Redirect} from 'react-router-dom';

class Gameplay extends Component{

    state={
        token : localStorage.getItem('accessToken'),
        selectStone:false,
        selectPaper:false,
        selectScissors:false,
        comSelectStone:false,
        comSelectPaper:false,
        comSelectScissors:false,
        imgHover:true,
        matchResult:"",
        resetState:false,
        modalsConfirm:false
    }

    playerClick=(idClick)=>{
        switch (idClick){
            case "stone": this.setState({selectStone:true});
            break;

            case "paper" : this.setState({selectPaper:true});
            break;

            case "scissors" : this.setState({selectScissors:true});
            break; 

            default : return null
        }
        console.log(`User Choosing ${idClick}`)
        this.disableClick();
        this.comSelect(idClick);
    }

    disableClick=()=> this.setState({imgHover:false});

    comSelect= async(idClick)=>{
            let arrComputerChoice = ["com-stone","com-scissors","com-paper"];
            let computerChoice = await arrComputerChoice[Math.floor(Math.random() *3)]
            switch (computerChoice){
                case "com-stone" : this.setState({comSelectStone:true});
                break;

                case "com-scissors" : this.setState({comSelectScissors:true});
                break;

                case "com-paper" : this.setState({comSelectPaper:true});
                break;

                default : return null
            }
            this.matchResult(idClick,computerChoice)
            
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
        this.setState({imgHover:true,selectStone:false,selectPaper:false,selectScissors:false,
            comSelectPaper:false,comSelectScissors:false,comSelectStone:false,matchResult:"",resetState:false})
    }
    
    render(){
        let{token,selectStone,selectPaper,selectScissors,comSelectPaper,comSelectScissors,comSelectStone,imgHover,
            matchResult,resetState} = this.state;
        let hover= imgHover? "img-hover" : "";
        
        if(token===""||token===null){
            return <Redirect to="/login" />
        }

        return(
            <div className="gameplay pt-2">
            <Header
            quitGame={()=>this.setState({modalsConfirm:true})}
            />
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex flex-column text-center">
                            <h1 className="pt-2">PLAYER</h1>
                            <figure className={`${selectStone ? "chosen" : ""}`}>  
                                <input className={`img-assets ${hover}`} alt="stone" type="image" disabled={!imgHover}
                                src={Stone} onClick={()=>this.playerClick("stone")}></input>
                            </figure>
                            <figure className={`${selectPaper ? "chosen" : ""}`}>
                                <input className={`img-assets ${hover}`} alt="paper" type="image" disabled={!imgHover}
                                src={Paper} onClick={()=>this.playerClick("paper")}></input>
                            </figure>
                            <figure className={`${selectScissors ? "chosen" : ""}`}>
                                <input className={`img-assets ${hover}`} alt="scissors" type="image" disabled={!imgHover}
                                src={Scissors} onClick={()=>this.playerClick("scissors")}></input>
                            </figure>
                        </div>
                    </Col>
                    <Col>
                        <Result 
                        matchResult={matchResult}
                        />
                        <Reset
                        resetState={resetState}
                        reset={()=>this.reset()}
                        />
                    </Col>
                    <Col>
                        <div className="d-flex flex-column text-center">
                            <h1 className="pt-2">COMPUTER</h1>
                            <figure className={`${comSelectStone ? "chosen" : ""}`}>
                                <input className="com img-assets" alt="stone" type="image" src={Stone}></input>
                            </figure >
                            <figure className={`${comSelectPaper ? "chosen" : ""}`}>
                                <input className="com img-assets" alt="paper" type="image" src={Paper}></input>
                            </figure>
                            <figure className={`${comSelectScissors ? "chosen" : ""}`}>
                                <input className="com img-assets" alt="scissors" type="image" src={Scissors}></input>
                            </figure>
                        </div>
                    </Col>
                </Row>
                <ModalsConfirm
                toogle = {this.state.modalsConfirm}
                closeModals={()=>this.setState({modalsConfirm:false})}
                />
            </Container>   
            </div>             
        )
    }
}

export default Gameplay;