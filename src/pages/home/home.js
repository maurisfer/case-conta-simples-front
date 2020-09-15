/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Line, defaults } from 'react-chartjs-2';
import GlobalStyle from '../../assets/styles/global';
import { Container } from './styles';
import { Headerdiv } from '../../assets/styles/headerdiv';
import { GreenButton } from '../../assets/styles/greenbutton';
import Imglogo from '../../assets/images/logo 01 mobile.svg';
import Sino from '../../assets/images/iconesino.svg';
import Logobranco from '../../assets/images/logobranco.svg';
import Olhoapagado from '../../assets/images/olhoapagado.svg';
import Olhoaceso from '../../assets/images/olhoaceso.svg';
import Iconeinicio from '../../assets/images/iconesul/iconeinicio.svg';
import IconeDepositar from '../../assets/images/iconesul/iconedepositar.svg';
import Iconeextratodaconta from '../../assets/images/iconesul/iconeextratodaconta.svg';
import IconeCartoes from '../../assets/images/iconesul/iconecartoes.svg';
import Iconeemitircobranca from '../../assets/images/iconesul/iconeemitircobranca.svg';
import IconeGestaodecobranca from '../../assets/images/iconesul/iconegestãodecobrança.svg';
import Iconetransferencia from '../../assets/images/iconesul/Grupo 2863.svg';
import Iconepagamentos from '../../assets/images/iconesul/iconeagendamentos.svg';
import Iconeusuarios from '../../assets/images/iconesul/iconeusuários.svg';
import IconeAgendamentos from '../../assets/images/iconesul/iconepagamentos.svg';
import IconesComprovantes from '../../assets/images/iconesul/iconecomprovantes.svg';
import IconeTarifas from '../../assets/images/iconesul/iconetarifas.svg';
import IconeFaleConosco from '../../assets/images/iconesul/iconefaleconosco.svg';
import IconeBeneficios from '../../assets/images/iconesul/iconebenefícios.svg';
import minusSign from '../../assets/images/menos-circulo-verde.svg';
import plusSign from '../../assets/images/mais-circulo-verde.svg';

import './cards.css';
import './tab.css';
import './chart.css';
import ImglogoCard from '../../assets/images/logobranco.svg';

import api from '../../services/api';

defaults.global.maintainAspectRatio = false;

const Saldo = (props) => {
  const [checked, setChecked] = useState(false);
  const style = checked ? 'mostrarsaldo' : 'mostrarsaldo nao-mostrarsaldo';
  const vizualizacao = checked ? Olhoaceso : Olhoapagado;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div id="saldoconta" className={style}>
      <h4>Saldo da Conta</h4>
      <button onClick={() => setChecked(!checked)}>
        <img src={vizualizacao} id="botaosaldo" alt="mostrar/esconder saldo" />
      </button>
      <h2 id="mask" className="borrao">
        R$ ****,00
      </h2>
      <h2 id="saldo">R$ 2.000,00</h2>
    </div>
  );
};

const AllOps = (props) => {
  const [infoAllOps, setInfoAllOps] = useState([]);
  const [opId, setOpId] = useState([]);

  const getAllOps = useCallback(async () => {
    const response = await api.get('/transactions'); // Retorna um array
    setInfoAllOps(response.data);
  }, []);

  const icon = opId ? minusSign:minusSign;
  console.log(opId)

  useEffect(() => {
    getAllOps();
  }, [getAllOps]);

  return (
    <table>
      <tr>
        <th>Data da transação</th>
        <th>Origem/favorecido</th>
        <th>Tipo de operação</th>
        <th>Final do cartão</th>
        <th>Valor</th>
      </tr>
      {infoAllOps.map((infoAllOp) => (
        <>
          <tr>
            <td>{infoAllOp.date}</td>
            <td>{infoAllOp.operatorName}</td>
            <td onLoad={async () => setOpId(infoAllOp.operationId)}>
              <img src={icon} id="opicon" alt="" />
            </td>
            <td>**** {infoAllOp.cardNumber}</td>
            <td>R$ {infoAllOp.value}</td>
          </tr>
        </>
      ))}
    </table>
  );
};

function Home() {
  const token = localStorage.getItem('@conta-simples/token');
  const accountId = localStorage.getItem('@conta-simples/accountid');

  if (!token) {
    window.location.href = '/login';
  }

  // useStates

  const [infosHome, setInfosHome] = useState([]); // Informação de conta
  const [infosCard, setInfosCard] = useState([]); // Informações de cartão
  const [infosOps, setInfosOps] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartDataCredit, setChartDataCredit] = useState([]);
  const [chartDataDebt, setChartDataDebt] = useState([]);

  // useEffects

  useEffect(() => {
    async function loadInfos() {
      try {
        const accountIdInfo = localStorage.getItem('@conta-simples/accountid');
        const response = await api.get(`/oneaccount/${accountIdInfo}`);
        setInfosHome(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    loadInfos();
  }, []); // Informações da conta

  useEffect(() => {
    async function loadInfos() {
      try {
        const accountIdCard = localStorage.getItem('@conta-simples/accountid');
        const response = await api.get(`/allcard/${accountIdCard}`);
        console.log(Array.isArray(response.data));
        setInfosCard(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    loadInfos();
  }, []); // Informação do cartão

  // Configs

  const styles = {
    fontWeight: 'bold',
    backgroundColor: '#45B54A',
    borderBottom: '1px solid #aaa',
    width: '100%',
  };

  const options = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 0,
      },
    },
    elements: {
      point: {
        radius: 2,
        backgroundColor: ['rgba(0, 190, 62, 0.2)'],
        borderColor: ['rgba(0, 190, 62, 0.4)'],
      },
    },
    legend: { display: false },
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            autoskip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
            display: false,
          },
          gridLines: {
            display: true,
          },
        },
      ],
      xAxes: [
        {
          maxBarThicness: 500,
          gridLines: {
            display: true,
          },
        },
      ],
    },
  };

  // Event Handlers

  const handleLogoutClick = async (e) => {
    async function Logout() {
      localStorage.removeItem('@conta-simples/token');
      localStorage.removeItem('@conta-simples/accountid');
    }
    Logout(e);
  };

  // Chart

  const chart = useCallback(async () => {
    setChartData({
      labels: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Nov',
        'Dez',
      ],
      datasets: [
        {
          label: 'Entradas',
          data: chartDataCredit,
          backgroundColor: ['rgba(0, 190, 62, 0.2)'],
          borderColor: ['rgba(0, 190, 62, 0.4)'],
          borderWidth: 3,
        },
        {
          label: 'Saida',
          data: chartDataDebt,
          backgroundColor: ['rgba(412, 90, 62, 0.2)'],
          borderColor: ['rgba(412, 90, 62, 0.4)'],
          borderWidth: 3,
        },
      ],
    });
  }, [chartDataCredit, chartDataDebt]);

  const getData = useCallback(async () => {
    const responsecd = await api.get('transactionscd'); // Retorna um array
    const responsedb = await api.get('transactionsdb');
    setChartDataDebt(responsedb.data);
    setChartDataCredit(responsecd.data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    chart();
  }, [chart]);

  /// ///////////////////////////

  return (
    <div className="Home">
      <>
        <GlobalStyle />
        <Container>
          <Headerdiv>
            <nav role="navigation">
              <div id="navinfos">
                <img src={Imglogo} alt="logo da empresa" />
                <button id="sino">
                  <img id="logo" src={Sino} alt="ativar notificações" />
                </button>
              </div>

              <div id="menuToggle">
                <input type="checkbox" />
                <span />
                <span />
                <span />

                <ul id="menu">
                  <li>
                    <a href="/">
                      <img src={Iconeinicio} alt="inicio" /> Início
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeDepositar} alt="inicio" />
                      Depositar
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Iconeextratodaconta} alt="inicio" />
                      Extrato da Conta
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeCartoes} alt="inicio" />
                      Cartões
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Iconeemitircobranca} alt="inicio" />
                      Emitir Cobrança
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeGestaodecobranca} alt="inicio" />
                      Gestão de Cobrança
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Iconetransferencia} alt="inicio" />
                      Transferência
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Iconepagamentos} alt="inicio" />
                      Pagamentos
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={Iconeusuarios} alt="inicio" />
                      Usuários
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeAgendamentos} alt="inicio" />
                      Agendamentos
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconesComprovantes} alt="inicio" />
                      Comprovantes
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeTarifas} alt="inicio" />
                      Tarifas
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeFaleConosco} alt="inicio" />
                      Fale Conosco
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={IconeBeneficios} alt="inicio" />
                      Beneficios
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div id="wellcomediv">
              <section id="sectioninfos">
                <div id="logoenome">
                  <h3>
                    <img src={Logobranco} id="logobranco" alt="ff" />
                    Bem-vindo à conta <strong>Fernando</strong>
                  </h3>
                </div>
                <h5>Sessão ativa há 00:00</h5>
                <Saldo />
              </section>

              <div className="buttondiv">
                <GreenButton>
                  <a href="/">Depositar</a>
                </GreenButton>
                <GreenButton>
                  <a href="/">Trasferir</a>
                </GreenButton>
                <GreenButton onClick={handleLogoutClick}>
                  <a href="/login">Sair</a>
                </GreenButton>
              </div>
            </div>
          </Headerdiv>
          <section id="informacoesconta">
            <div className="containfos">
              <Saldo />
            </div>

            <div className="containfos">
              <h4>Rentabilidade</h4>
              <h2>R$ 222,00</h2>
              <p id="tempoatualizacao">Atualizado ontem às 15:00hrs</p>
            </div>

            <div className="containfos">
              <div id="dadosconta">
                {infosHome.map((infoHome) => (
                  <>
                    <p>
                      <strong>{infoHome.enterpriseName}</strong>
                    </p>
                    <p>
                      <strong>CNPJ:</strong> {infoHome.enterpriseID}{' '}
                    </p>
                    <p>
                      <strong>Banco Votorantim:</strong> 655
                    </p>
                    <p>
                      <strong>Agência:</strong> 1111
                    </p>
                    <p>
                      <strong>Conta:</strong> {infoHome.accountNumber}
                    </p>
                  </>
                ))}
                <button id="compartilhardados">COMPARTILHAR</button>
              </div>
            </div>
          </section>
          <div id="chart">
            <h3>Entrada vs saída</h3>
            <div className="canvas-container">
              <Line data={() => chartData} options={options} />
            </div>
          </div>
          <div id="cardsdiv">
            <div className="card">
              <Tabs forceRenderTabPanel defaultIndex={0}>
                <div>
                  <TabList>
                    <Tab style={styles}>Cartões</Tab>
                  </TabList>
                </div>
                <TabPanel>
                  <Tabs forceRenderTabPanel>
                    <div>
                      <TabList id="listandocartoes">
                        {infosCard.map((infoCard) => (
                          <Tab
                            name="cardlist"
                            listId={infoCard._id}
                            onClick={async () => {
                              const response = await api.get(
                                `/transactions/${infoCard._id}`
                              );
                              setInfosOps(response.data);
                            }}
                          >
                            {/* <div id="cardid">{infoCard._id}</div> */}
                            Cartão {infoCard.cardName}
                          </Tab>
                        ))}
                      </TabList>
                      <>
                        {infosCard.map((infoCard) => (
                          <TabPanel>
                            <Tabs forceRenderTabPanel>
                              <div className="cardImg">
                                <div className="cartaoficticio">
                                  <img
                                    src={ImglogoCard}
                                    className="logobranco"
                                    alt="cartão"
                                  />
                                  <div>
                                    <p className="textocartao ">
                                      {' '}
                                      {infoCard.cardName}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="textocartao numero">
                                      **** **** **** {infoCard.cardNumber}
                                    </p>
                                    <p className="textocartao validade">
                                      {infoCard.cardExpire}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Tabs>
                            <>
                              <div>
                                <div className="tab" id="all-transaction">
                                  <table>
                                    <tr>
                                      <th className="tab-title">
                                        {' '}
                                        Data da Transação
                                      </th>
                                      <th className="tab-title">
                                        {' '}
                                        Origem/ Favorecido
                                      </th>
                                      <th className="tab-title">
                                        {' '}
                                        Tipo de Operação
                                      </th>
                                      <th className="tab-title"> Valor</th>
                                    </tr>
                                    {infosOps.map((infosOp) => (
                                      <tr key={infosOp.id}>
                                        <td className="tab-title">
                                          {infosOp.date}
                                        </td>
                                        <td className="tab-title">
                                          {infosOp.operatorName}
                                        </td>
                                        <td className="tab-title">
                                          {infosOp.operationId}
                                        </td>
                                        <td className="tab-title">
                                          R$ {infosOp.value}
                                        </td>
                                      </tr>
                                    ))}
                                  </table>
                                </div>
                              </div>
                            </>
                          </TabPanel>
                        ))}
                      </>
                    </div>
                  </Tabs>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <button id="cadastracartao">
            <Link to={`/cadastrarcartao/${accountId}`}>Cadastrar Cartão </Link>
          </button>

          <div id="transacoestitulo">
            <h3>Últimas Transações</h3>
            <button id="mostrartransacoes">Mostrar todas</button>
          </div>
          <div id="ultimastransacoes">
            <AllOps />
          </div>
          <span id="footerConta">
            {infosHome.map((infoHome) => (
              <>
                <h4>{infoHome.enterpriseName}</h4>
                <p>Agência 0001</p>
                <p>Conta {infoHome.accountNumber}</p>
                <p>
                  CNPJ <b>{infoHome.enterpriseID}</b>
                </p>
              </>
            ))}
          </span>
          <div id="footer">
            <span>
              <h5>Frase do dia</h5>
              <p id="frase">
                Eles vão invejá-lo pelo seu sucesso, sua riqueza, sua
                inteligência, sua aparência, seu estatuto - mas raramente pela
                sua sabedoria.
              </p>
              <p id="autorFrase">Nassim Nicholas Taleb</p>
              <p id="equipeB">Com carinho, Equipe B ♥</p>
            </span>
          </div>
        </Container>
      </>
    </div>
  );
}

export default Home;
