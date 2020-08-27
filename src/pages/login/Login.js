import React from 'react';
import { Container } from './styles';
import ImgLogin from '../../assets/images/login-image.svg';
import Img from '../../assets/images/logo 01 mobile.svg';
import GlobalStyle from '../../assets/styles/global';

function Login() {
  return (
    <div className="Login">
      <>
        <GlobalStyle />
        <Container>
<<<<<<< HEAD
          <img
            id="imglogin"
            src={ImgLogin}
            alt="Ilustração de mulher com cartão"
          />
          <div id="loginform">
            <form>
              <img id="imglogo" src={Img} alt="Logo da conta simples" />
              <h4>Preencha os campos abaixo para fazer login </h4>
              <label htmlFor="cnpj" className="labellogin">
                {' '}
                CPF: <br />
                <input placeholder="Insira seu CPF" type="text" id="cnpj" />
              </label>
              <label htmlFor="senha" className="labellogin">
                {' '}
                Senha: <br />
                <input
                  placeholder="Insira sua senha"
                  type="password"
                  id="senha"
                />
              </label>
              <input value="LOGIN" type="submit" />
              <a href="/">Esqueci minha senha {'>'}</a> <br />
              <a href="/">Ainda não sou cliente {'>'}</a>
            </form>
          </div>
=======
          <img id="imglogin" src={ImgLogin} alt="Ilustração de mulher com cartão" />
            <div id="loginform">
              <form>
                <img id="imglogo" src={Img} alt="Logo da conta simples"></img>
                <h4>Preencha os campos abaixo para fazer login </h4>
<<<<<<< HEAD
                <label htmlFor="cpf" className="labellogin"> CNPJ: <br/> {/* Será CNPJ */}
                  <input placeholder="Insira seu CPF" type='text' id="cpf"/>
=======
                <label htmlFor="cnpj" className="labellogin"> CPF: <br/>
                  <input placeholder="Insira seu CPF" type='text' id="cnpj"/>
>>>>>>> 3b956335ba7ad3f0679799db1b6294c3f957e7f5
                </label>
                <label htmlFor="senha" className="labellogin"> Senha: <br/> {/* Irá fazer um post pro backend para validação */}
                  <input placeholder="Insira sua senha" type='password' id="senha"/>
                </label>
                <input value="LOGIN" type= "submit" />
                <a href="/">Esqueci minha senha {">"}</a> <br/>
                <a href="/">Ainda não sou cliente {">"}</a> {/* Irá direcionar para um formulário de cadastro */}
              </form>
            </div>
>>>>>>> 0cd9fc3db5acefc4dd48084da0e5724742ba91fa
        </Container>
      </>
    </div>
  );
}

export default Login;
