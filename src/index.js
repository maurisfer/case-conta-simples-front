import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Login from './pages/login/Login';
import Home from './pages/home/home';
import NotFound from './pages/404/404';
<<<<<<< HEAD
import Criarcartao from './pages/novo-cartão/cadastrarcartao'
<<<<<<< HEAD
=======
import Criarcartao from './pages/cadastrar cartão/cadastrarcartao'
>>>>>>> conexao-api
=======
import Criarconta from './pages/criarconta/Criarconta'
>>>>>>> e961b8273d474c5ee463ccb17464d7acf2834514

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/cadastrarcartao" component={Criarcartao}></Route>
        <Route path="/criarconta" component={Criarconta}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


