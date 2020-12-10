import React, { Component } from 'react';
import Login from './components/login_page/Login';
import Register from './components/register_page/Register';
import ListGame from './components/list_game_page/ListGame';
import GamePlay from "./components/gameplay_page/gameplay"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavHeader } from './components/NavHeader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLoggedIn } from './components/NavBar_homepage/NavLoggedIn';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavLoggedIn></NavLoggedIn>
          <Switch>
            <Route exact path="/" component={ListGame}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/gamePlay" component={GamePlay}/>
            {/* <Route path="/game" component={Game} />
            <Route path="/user" component={User}/>
            <Route path="/history" component={Log}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;