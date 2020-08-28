/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './cards.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './tab.css';
import Imglogo from '../../assets/images/logobranco.svg';

function Cards() {
  return (
    <div className="card">
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList activeTabClassName="is-selected">
          <Tab>Cartões</Tab>
          <Tab>Últimas Transações da Conta</Tab>
        </TabList>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Cartão Anúncio</Tab>
              <Tab>Cartão Fornecedor</Tab>
              <Tab>Cartão Escitório</Tab>
              <Tab>Cartão Afiliados</Tab>
              <Tab>Cartão Dropshipping</Tab>
            </TabList>
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
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Entrava vs Saída</Tab>
              <Tab>Entrada</Tab>
              <Tab>Saída</Tab>
            </TabList>
            <TabPanel>
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
                    <td className="tab-title">15/08/2020</td>
                    <td className="tab-title">Mercado Pago</td>
                    <td className="tab-title">Crédito</td>
                    <td className="tab-title">R$ 8.000,00</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="tab">
                <table>
                  <tr>
                    <th className="tab-title">Data da transação</th>
                    <th className="tab-title">Origem/Favorecido</th>
                    <th className="tab-title">Tipo de Operação</th>
                    <th className="tab-title">Valor</th>
                  </tr>
                  <tr>
                    <td className="tab-title">16/08/2020</td>
                    <td className="tab-title">Mercado Pago</td>
                    <td className="tab-title">Crédito</td>
                    <td className="tab-title">R$ 9.000,00</td>
                  </tr>
                  <tr>
                    <td className="tab-title">15/08/2020</td>
                    <td className="tab-title">Mercado Pago</td>
                    <td className="tab-title">crédito</td>
                    <td className="tab-title">R$ 8.000,00</td>
                  </tr>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
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
                    <td className="tab-title">13/08/2020</td>
                    <td className="tab-title">Mercado Pago</td>
                    <td className="tab-title">Débito</td>
                    <td className="tab-title">R$ 4.000,00</td>
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
