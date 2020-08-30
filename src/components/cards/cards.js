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
  const [infos, setInfos] = useState({});

  useEffect(() => {
    async function loadInfos() {
      const { account_id } = await localStorage.getItem('@conta-simples/id');
      const response = await api.get('/card', account_id);
      setInfos(response.data);
    }
    loadInfos();
  }, []);

  return (
    <div className="card">
      {infos.map((info) => (
      <Tabs forceRenderTabPanel defaultIndex={0} key={info._id}>
        <TabList>
          <Tab style={styles}>Cartões</Tab>
        </TabList>
        <TabPanel>

            <Tabs forceRenderTabPanel >
              <TabList id="listandocartoes">
                <Tab> Cartão {info.cardName}</Tab>

              </TabList>
              <TabPanel>
                <div className="cardImg">
                  <div className="cartaoficticio">
                    <img src={Imglogo} className="logobranco" />
                    <p className="textocartao"> Nooma Design</p><br /> {/* Vai puxar do accountModel */}
                    <p className="textocartao">{info.cardNumber}</p> <br />
                    <p className="textocartao">{info.cardExpire}</p>
                  </div>
                </div>
                <div className="tab">
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
              <TabPanel>
                <div className="cardImg">
                  <div className="cartaoficticio">
                    <img src={Imglogo} className="logobranco" />
                    <p className="textocartao">
                      Nooma Design <br />
                      ***** 0000 <br />
                      00/00/0000
                    </p>
                  </div>
                </div>
                <div className="tab">
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
              <TabPanel>
                <div className="cardImg">
                  <div className="cartaoficticio">
                    <img src={Imglogo} className="logobranco" />
                    <p className="textocartao">
                      Nooma Design <br />
                      ***** 0000 <br />
                      00/00/0000
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <table>
                    <tr>
                      <th className="tab-title">Data da transação</th>
                      <th className="tab-title">Origem/Favorecido</th>
                      <th className="tab-title">Tipo de Operação</th>
                      <th className="tab-title">Valor</th>
                    </tr>
                    <tr>
                      <td className="tab-title">12/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 3.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">12/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 3.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">12/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 3.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">12/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 3.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">12/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 3.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">12/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 3.000,00</td>
                    </tr>
                  </table>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="cardImg">
                  <div className="cartaoficticio">
                    <img src={Imglogo} className="logobranco" />
                    <p className="textocartao">
                      Nooma Design <br />
                      ***** 0000 <br />
                      00/00/0000
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <table>
                    <tr>
                      <th className="tab-title">Data da transação</th>
                      <th className="tab-title">Origem/Favorecido</th>
                      <th className="tab-title">Tipo de Operação</th>
                      <th className="tab-title">Valor</th>
                    </tr>
                    <tr>
                      <td className="tab-title">13/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 4.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">13/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 4.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">13/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 4.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">13/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 4.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">13/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 4.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">13/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 4.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">13/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 4.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">13/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 4.000,00</td>
                    </tr>
                  </table>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="cardImg">
                  <div className="cartaoficticio">
                    <img src={Imglogo} className="logobranco" />
                    <p className="textocartao">
                      Nooma Design <br />
                      ***** 0000 <br />
                      00/00/0000
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <table>
                    <tr>
                      <th className="tab-title">Data da transação</th>
                      <th className="tab-title">Origem/Favorecido</th>
                      <th className="tab-title">Tipo de Operação</th>
                      <th className="tab-title">Valor</th>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                    <tr>
                      <td className="tab-title">14/08/2020</td>
                      <td className="tab-title">Mercado Pago</td>
                      <td className="tab-title">Débito</td>
                      <td className="tab-title">R$ 6.000,00</td>
                    </tr>
                  </table>
                </div>
              </TabPanel>
            </Tabs>

        </TabPanel>
      </Tabs>
      ))}
    </div>
  );
}

export default Cards;
