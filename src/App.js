import React, { Component } from 'react';
import Login from './components/login_page/Login';
import Register from './components/register_page/Register';
import ListGame from './components/list_game_page/ListGame';
import GamePlay from "./components/gameplay_page/gameplay";
import Profile from './components/profile_page/Profile';
import ChangePassword from './components/profile_page/ChangePassword';
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
            <Route path="/profile" component={Profile}/>
            <Route path="/change-password" component={ChangePassword}/>
            {/* <Route path="/profile" component={ () => <Profile  isAuth={this.state.isAuth} user={this.state.user} />}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;