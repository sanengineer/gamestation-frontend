import React, { Component } from 'react';
import Login from './components/login_page/Login';
import Register from './components/register_page/Register';
import GamePlay from "./components/gameplay_page/gameplay";
import MainProfile from './components/profile_page/MainProfile';
import ListGame from "./components/list_game_page/ListGame"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Underconstruction from "./components/underConstruction.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ListGame}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/gamePlay" component={GamePlay}/>
            <Route path="/main-profile" component={MainProfile}/>
            <Route path="/under-construction" component={Underconstruction}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;