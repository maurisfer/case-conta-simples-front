/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './cards.css';
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

  const [infos, setInfos] = useState([]);
  console.log(infos)

  useEffect(() => {
    async function loadInfos() {
      try {
        const account_id = localStorage.getItem('@conta-simples/accountid');
        const response = await api.get(`/card/${account_id}`);
        console.log(Array.isArray(response.data.findCard));
        setInfos(response.data.findCard);
      } catch (e) {
        console.log(e);
      }
    }
    loadInfos();
  }, []);


  const handleClick = async (e) => {
    const card_id = e.target.key;
    const response = await api.get(`/transactions/${card_id}`);
    response.data.CardTransactions.map((infoOps) => {
      document.getElementById('transactions').innerHTML =
      `<tr>
        <td className="tab-title">${infoOps.date}</td>
        <td className="tab-title">${infoOps.operatorName}</td>
        <td className="tab-title">${infoOps.operationId}</td>
        <td className="tab-title"> R$ ${infoOps.value}</td>
      </tr>`
    };
  });

  return (
    <div className="card">
      <Tabs forceRenderTabPanel defaultIndex={0}>
        <div>
          <TabList>
            <Tab style={styles}>Cartões</Tab>
          </TabList>
        </div>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <>
              <div>
                {infos.map((info) => (
                  <TabList id="listandocartoes" key={info._id} onClick={handleClick}>
                    <Tab> Cartão {info.cardName} </Tab>
                  </TabList>
                ))}
                ;
              </div>
            </>
            <TabPanel>
              <div className="cardImg">
                <>
                  {infos.map((info) => (
                    <div className="cartaoficticio">
                      <img src={Imglogo} className="logobranco" alt="cartão" />
                      <div>
                        <p className="textocartao "> {info.cardName}</p>
                      </div>
                      <div>
                        <p className="textocartao numero">
                          **** **** **** {info.cardNumber}
                        </p>
                        <p className="textocartao validade">
                          {info.cardExpire}
                        </p>
                      </div>
                    </div>
                  ))}
                  ;
                </>
              </div>
              <>
                <div>
                  <div className="tab" id="all-transaxtio">
                    <table>
                      <tr>
                        <th className = "tab-title"> Data da Transação</th>
                        <th className = "tab-title"> Origem/ Favorecido</th>
                        <th className = "tab-title"> Tipo de Operação</th>
                        <th className = "tab-title"> Valor</th>
                      </tr>
                      <div id='transactions'></div>
                    </table>
                  </div>
                </div>
              </>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Cards;
