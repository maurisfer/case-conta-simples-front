import React, {useState} from 'react';
import GlobalStyle from '../../assets/styles/global';
import {Container} from './styles'
import {Headerdiv} from "../../assets/styles/headerdiv"
import {GreenButton} from "../../assets/styles/greenbutton"
import Imglogo from "../../assets/images/logo 01 mobile.svg"
import Sino from "../../assets/images/iconesino.svg"
import Iconemenu from "../../assets/images/barramenu.svg"
import Exitmenu from "../../assets/images/exitmenu.svg"
import Logobranco from "../../assets/images/logobranco.svg"
import Olhoapagado from "../../assets/images/olhoapagado.svg"
import Olhoaceso from "../../assets/images/olhoaceso.svg"
import Iconeinicio from "../../assets/images/iconesul/iconeinicio.svg"
import IconeDepositar from "../../assets/images/iconesul/iconedepositar.svg"
import Iconeextratodaconta from "../../assets/images/iconesul/iconeextratodaconta.svg"
import IconeCartoes  from "../../assets/images/iconesul/iconecartoes.svg"
import Iconeemitircobranca from "../../assets/images/iconesul/iconeemitircobranca.svg"
import IconeGestaodecobranca from "../../assets/images/iconesul/iconegestãodecobrança.svg"
import Iconetransferencia from "../../assets/images/iconesul/Grupo 2863.svg"
import Iconepagamentos from "../../assets/images/iconesul/iconeagendamentos.svg"
import Iconeusuarios from "../../assets/images/iconesul/iconeusuários.svg"
import IconeAgendamentos from "../../assets/images/iconesul/iconepagamentos.svg"
import IconesComprovantes from "../../assets/images/iconesul/iconecomprovantes.svg"
import IconeTarifas from "../../assets/images/iconesul/iconetarifas.svg"
import IconeFaleConosco from "../../assets/images/iconesul/iconefaleconosco.svg"
import IconeBeneficios from "../../assets/images/iconesul/iconebenefícios.svg"

import Chart from '../../components/chart/chart';

const Saldo = props => {
  const [checked, setChecked] = useState(false);
  const style = checked? "mostrarsaldo" : "mostrarsaldo nao-mostrarsaldo"
  const vizualizacao = checked? Olhoaceso : Olhoapagado
  return (
    <div id="saldoconta" className={style}>
      <h4>Saldo da Conta</h4>
      <button onClick={() => setChecked(!checked)}><img src={vizualizacao} id="botaosaldo"alt="mostrar/esconder saldo"/></button>
      <h2 id="mask">R$ ****,00</h2>
      <h2 id="saldo">R$ 2.000,00</h2>
    </div>
  )
}



// const Menucontent = props => {
//   const [checked, setChecked] = useState(false);
//   const stylenav = checked? "mostrarmenu" : "mostrarmenu escondermenu"
//   const iconmenu = checked? Exitmenu : Iconemenu
//   return (
//     <div id="menucontent">
//       <button onClick={() => setChecked(!checked)}>
//         <img src={iconmenu} alt="clique para abrir o menu" id="botaomenu" />
//       </button>
//       <img src={Imglogo} alt="logo da empresa"/>
//       <button>
//         <img src={Sino} alt = "ativar notificações"/>
//       </button>
//       <div className={stylenav} id="navigation">
//         <ul>
//           <li><a href="/"><img  src={Iconeinicio} alt="inicio"/> Início</a></li>
//           <li><a href="/"><img  src={IconeDepositar} alt="inicio"/>Depositar</a></li>
//           <li><a href="/"><img  src={Iconeextratodaconta} alt="inicio"/>Extrato da Conta</a></li>
//           <li><a href="/"><img  src={IconeCartoes} alt="inicio"/>Cartões</a></li>
//           <li><a href="/"><img  src={Iconeemitircobranca} alt="inicio"/>Emitir Cobrança</a></li>
//           <li><a href="/"><img  src={IconeGestaodecobranca} alt="inicio"/>Gestão de Cobrança</a></li>
//           <li><a href="/"><img  src={Iconetransferencia} alt="inicio"/>Transferência</a></li>
//           <li><a href="/"><img  src={Iconepagamentos} alt="inicio"/>Pagamentos</a></li>
//           <li><a href="/"><img  src={Iconeusuarios} alt="inicio"/>Usuários</a></li>
//           <li><a href="/"><img  src={IconeAgendamentos} alt="inicio"/>Agendamentos</a></li>
//           <li><a href="/"><img  src={IconesComprovantes} alt="inicio"/>Comprovantes</a></li>
//           <li><a href="/"><img  src={IconeTarifas} alt="inicio"/>Tarifas</a></li>
//           <li><a href="/"><img  src={IconeFaleConosco} alt="inicio"/>Fale Conosco</a></li>
//           <li><a href="/"><img  src={IconeBeneficios} alt="inicio"/>Beneficios</a></li>
//         </ul>
//       </div>
//     </div>
//   )
// }


function Home(){
  return (
  <div className="Home">
    <>
      <GlobalStyle/>
      <Container>
      <Headerdiv>

      <nav role="navigation">
          <div id="navinfos">
            <img src={Imglogo} alt="logo da empresa"/>
            <button>
              <img src={Sino} alt = "ativar notificações"/>
            </button>
          </div>

          <div id="menuToggle">
            <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>

            <ul id="menu">
              <li><a href="/"><img  src={Iconeinicio} alt="inicio"/> Início</a></li>
              <li><a href="/"><img  src={IconeDepositar} alt="inicio"/>Depositar</a></li>
              <li><a href="/"><img  src={Iconeextratodaconta} alt="inicio"/>Extrato da Conta</a></li>
              <li><a href="/"><img  src={IconeCartoes} alt="inicio"/>Cartões</a></li>
              <li><a href="/"><img  src={Iconeemitircobranca} alt="inicio"/>Emitir Cobrança</a></li>
              <li><a href="/"><img  src={IconeGestaodecobranca} alt="inicio"/>Gestão de Cobrança</a></li>
              <li><a href="/"><img  src={Iconetransferencia} alt="inicio"/>Transferência</a></li>
              <li><a href="/"><img  src={Iconepagamentos} alt="inicio"/>Pagamentos</a></li>
              <li><a href="/"><img  src={Iconeusuarios} alt="inicio"/>Usuários</a></li>
              <li><a href="/"><img  src={IconeAgendamentos} alt="inicio"/>Agendamentos</a></li>
              <li><a href="/"><img  src={IconesComprovantes} alt="inicio"/>Comprovantes</a></li>
              <li><a href="/"><img  src={IconeTarifas} alt="inicio"/>Tarifas</a></li>
              <li><a href="/"><img  src={IconeFaleConosco} alt="inicio"/>Fale Conosco</a></li>
              <li><a href="/"><img  src={IconeBeneficios} alt="inicio"/>Beneficios</a></li>
            </ul>
           </div>
          </nav>

        <div id="wellcomediv">

          <section id="sectioninfos">
            <div id="logoenome">
              <h3><img src={Logobranco} id="logobranco" />Bem-vindo à conta <strong>Fernando</strong></h3>
            </div>
            <h5>Sessão ativa há 00:00</h5>
            <Saldo />
          </section>

          <div className="buttondiv">
            <GreenButton><a href="/">Depositar</a></GreenButton>
            <GreenButton><a href="/">Trasferir</a></GreenButton>
          </div>

        </div>
      </Headerdiv>

      <Chart />

      </Container>

    </>
  </div>
);
}

export default Home;

