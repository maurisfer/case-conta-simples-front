import React from 'react';
import { Container } from './styles';
import ImgLogin from '../../assets/images/login-image.svg';
import Img from '../../assets/images/logo 01 mobile.svg';
import GlobalStyle from '../../assets/styles/global';

import MaskedInput from 'react-text-mask'


function Login() {
  return (
    <div className="Login">
      <>
        <GlobalStyle />
        <Container>

          <img
            id="imglogin"
            src={ImgLogin}
            alt="Ilustração de mulher com cartão"
          />
          <div id="loginform">
            <div id='tituloform'>
              <img id="imglogo" src={Img} alt="Logo da conta simples" />
              <h4>Preencha os campos abaixo para fazer login </h4>
            </div>
            <form>
              <label htmlFor="cnpj" className="labellogin">
                {' '}
                CNPJ: <br />
                <MaskedInput mask={[/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', '0', '0', '0', /\d/, '-', /\d/, /\d/]} placeholder="Insira seu CNPJ" type="text" id="cnpj" />
              </label>
              <label htmlFor="senha" className="labellogin">
                {' '}
                Senha: <br />{' '}
                {/* Irá fazer um post pro backend para validação */}
                <input
                  placeholder="Insira sua senha"
                  type="password"
                  id="senha"
                />
              </label>
              <input value="LOGIN" type="submit" />
              </form>
              <a href="/">Esqueci minha senha {'>'}</a> <br />
              <a href="/">Ainda não sou cliente {'>'}</a>{' '}
              {/* Irá direcionar para um formulário de cadastro */}

          </div>
        </Container>
      </>
    </div>
  );
}

export default Login;
