import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
=======
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
>>>>>>> 2a5d663d658aed58750b369d5a9240d01de30a8d
import Login from './pages/login/Login';
import Home from './pages/home/home';
import NotFound from './pages/404/404';
import Criarcartao from './pages/cadastrar cartão/cadastrarcartao.js'
<<<<<<< HEAD

=======
>>>>>>> 2a5d663d658aed58750b369d5a9240d01de30a8d

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/cadastrarcartao" component={Criarcartao}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


