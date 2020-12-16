import React, { Component } from 'react';
import Login from './components/login_page/Login';
import Register from './components/register_page/Register';
import ListGame from './components/list_game_page/ListGame';
import GamePlay from "./components/gameplay_page/gameplay";
import Profile from './components/profile_page/Profile';
import ChangePassword from './components/profile_page/ChangePassword';
import ScoreProfile from './components/profile_page/ScoreProfile';
import MainProfile from './components/profile_page/MainProfile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/NavHeader.js';
import Footer from "./components/footer/index.js";
import Underconstruction from "./components/underConstruction.js";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavHeader/>
          <Switch>
            <Route exact path="/" component={ListGame}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/gamePlay" component={GamePlay}/>
            <Route path="/main-profile" component={MainProfile}/>
            <Route path="/under-construction" component={Underconstruction}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;