import React from 'react';
import { Container } from './styles';
import ImgCriar from '../../assets/images/imagemcriarconta.svg';
import Img from '../../assets/images/logo 01 mobile.svg';
import GlobalStyle from '../../assets/styles/global';

import MaskedInput from 'react-text-mask'


function Criarconta() {
  return (
    <div className="Login">
      <>
        <GlobalStyle />
        <Container>

          <img
            id="imglogin"
            src={ImgCriar}
            alt="Ilustração de mulher com cartão"
          />
          <div id="loginform">
            <div id='tituloform'>
              <img id="imglogo" src={Img} alt="Logo da conta simples" />
              <h4>Preencha os campos abaixo para criar sua conta </h4>
            </div>
            <form>
            <label htmlFor="nomedaempresa" className="labellogin" name="enterpriseName">
                {' '}
                Nome da empresa: <br />{' '}
                {/* Irá fazer um post pro backend para validação */}
                <input
                  placeholder="Insira o nome da sua empresa"
                  type="text"
                  id="nomedaempresa"
                />
              </label>

              <label htmlFor="cnpj" className="labellogin" name="enterpriseID">
                {' '}
                CNPJ: <br />
                <MaskedInput mask={[/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', '0', '0', '0', /\d/, '-', /\d/, /\d/]} placeholder="Insira o CNPJ da empresa" type="text" id="cnpj" />
              </label>

              <label htmlFor="emailempresa" className="labellogin" name="email">
                {' '}
                E-mail da empresa: <br />{' '}
                {/* Irá fazer um post pro backend para validação */}
                <input
                  placeholder="Insira o e-mail da sua empresa"
                  type="email"
                  id="emailempresa"
                />
              </label>

              <label htmlFor="senha" className="labellogin" name="password">
                {' '}
                Senha: <br />{' '}
                {/* Irá fazer um post pro backend para validação */}
                <input
                  placeholder="Insira sua senha"
                  type="password"
                  id="senha"
                />
              </label>

              <label htmlFor="confirmesenha" className="labellogin" name="confirmPassword">
                {' '}
                Confirme sua senha: <br />{' '}
                {/* Irá fazer um post pro backend para validação */}
                <input
                  placeholder="Confirme a senha"
                  type="password"
                  id="confirmesenha"
                />
              </label>

              <input value="CRIAR MINHA CONTA" type="submit" />
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

export default Criarconta;
