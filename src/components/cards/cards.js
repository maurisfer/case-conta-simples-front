/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import './cards.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tab.css';
import Imglogo from '../../assets/images/logobranco.svg';
import api from '../../services/api';

const styles = {
  fontWeight: 'bold',
  backgroundColor: '#45B54A',
  borderBottom: '1px solid #aaa',
  width: '100%',
};

function Cards() {

  const [infoId, setInfoId] = useState({
    account_id: '',
  });
  const [infos, setInfos] = useState({});

  const onNameClick = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    async function loadInfos() {
      const {account_id} = infoId;
      const response = await api.get('/card', account_id);
      setInfos([response.data]);
    }
    loadInfos();
  }, []);
  /* useEffect(() => {
    async function loadAccId() {
      const accId = localStorage.getItem('@conta-simples/accountid');
      setInfoId({ account_id: accId.toString() });
    }
    loadAccId();
  }, []); */


  return (
    <div className="card">

      <Tabs forceRenderTabPanel defaultIndex={0} >
        <TabList>
          <Tab style={styles}>Cartões</Tab>
        </TabList>
          <TabPanel >
            <Tabs forceRenderTabPanel >
              <div> {/* Lista de cartões */}
                <TabList id="listandocartoes">
                  <Tab> Cartão </Tab>
                </TabList>
              </div>
              <TabPanel>
                <div className="cardImg">
                    <div className="cartaoficticio">
                      <img src={Imglogo} className="logobranco" />
                    <div> {/* Nome da empresa / Vai puxar do accountModel */}
                      <p className="textocartao "> Nooma Design</p><br />
                    </div>
                    <br/>
                    <div>
                      <p className="textocartao numero">**** **** **** 4444</p> {/* Número do cartão / Vai puxar do cardModel */}
                      <p className="textocartao validade">09/2020</p> {/* Validade / Vai puxar do cardModel */}
                    </div>

                  </div>
                </div>
                <div className="tab"> {/* Transações / Vai puxar do transictionModel */}
                  <table>
                    <tr>
                      <th className="tab-title">Data da transação</th>
                      <th className="tab-title">Origem/Favorecido</th>
                      <th className="tab-title">Tipo de Operação</th>
                      <th className="tab-title">Valor</th>
                    </tr>
                    <tr>
                      <td className="tab-title">11/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 2.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">11/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 2.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">11/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 2.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">11/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 2.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">11/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 2.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">11/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 2.000,00</td>
                    </tr>
                  </table>
                </div>
              </TabPanel>
            </Tabs>

        </TabPanel>
      </Tabs>

    </div>
  );
}


export default Cards;
