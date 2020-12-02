import React, { Component } from 'react';
import Login from './components/login/login';
import Register from './components/register/register';
import ListGame from './components/game/ListGame';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavHeader} from './components/NavHeader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavHeader></NavHeader>
          <Switch>
            <Route exact path="/" component={ListGame}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
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