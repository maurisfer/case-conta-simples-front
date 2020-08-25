import React from 'react';
import {Container} from './styles';
import ImgLogin from '../../assets/images/login-image.svg'
import Img from "../../assets/images/logo 01 mobile.svg"
import GlobalStyle from '../../assets/styles/global';

function Login() {
  return (
    <div className="Login">
      <>
        <GlobalStyle/>
        <Container>
          <img id="imglogin" src={ImgLogin} alt="Ilustração de mulher com cartão" />
            <div id="loginform">
              <form>
                <img id="imglogo" src={Img} alt="Logo da conta simples"></img>
                <h4>Preencha os campos abaixo para fazer login </h4>
                <label htmlFor="cpf" className="labellogin"> CPF: <br/>
                  <input placeholder="Insira seu CPF" type='text' id="cpf"/>
                </label>
                <label htmlFor="senha" className="labellogin"> Senha: <br/>
                  <input placeholder="Insira sua senha" type='password' id="senha"/>
                </label>
                <input value="LOGIN" type= "submit" />
                <a href="/">Esqueci minha senha {">"}</a> <br/>
                <a href="/">Ainda não sou cliente {">"}</a>
              </form>
            </div>
        </Container>
      </>
    </div>
  );
}

export default Login;
