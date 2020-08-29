import React from 'react';
import { Container } from './styles';
import GlobalStyle from '../../assets/styles/global';
import Imagemcartao from '../../assets/images/cadastrarcartao.svg'
import Img from '../../assets/images/logo 01 mobile.svg';

function Criarcartao() {
  return (
    <div className="Criarcartao">
      <>
        <GlobalStyle />
        <Container>

          <img
            id="imglogin"
            src={Imagemcartao}
            alt="Ilustração de mulher com cartão"
          />
          <div id="loginform">
            <form>
              <img id="imglogo" src={Img} alt="Logo da conta simples" />
              <h4>Preencha para cadastrar um novo cartão </h4>
              <label htmlFor="nomecartao" className="labellogin">
                {' '}
                Nome do Cartão: <br />
                <input placeholder="Insira o nome do cartão" type="text" id="nomecartao" />
              </label>
              <label htmlFor="senha" className="labellogin">
                {' '}
                Senha: <br />{' '}
                {/* Irá fazer um get pro backend para validação */}
                <input
                  placeholder="Insira sua senha"
                  type="password"
                  id="senha"
                />
              </label>


              <input value="CADASTRAR" type="submit" />

            </form>
          </div>
        </Container>
      </>
    </div>
  );
}

export default Criarcartao;
