import React, { useState, useEffect, useCallback } from 'react';
import { Line, defaults } from 'react-chartjs-2';
import api from '../../services/api';

defaults.global.maintainAspectRatio = false;

const Grafico = () => {
  const [chartData, setChartData] = useState({});
  const [chartDataCredit, setChartDataCredit] = useState();
  const [chartDataDebt, setChartDataDebt] = useState();

  const chart = () => {
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
  };

  useEffect(() => {
    async function loadData() {
      // Promise.all(api.get('transaction/deb'), api.get('transaction/cre'));
      // const { debt, credit } = Promise.all;
      const responsecd = await api.get('transactions/cre'); // Retorna um array
      const responsedb = await api.get('transactions/deb');
      setChartDataDebt(responsedb.data);
      setChartDataCredit(responsecd.data);
      // console.log(responsecd.data);
      // setChartDataCredit(credit);
      // setChartDataDebt(debt);
    }
    loadData();
    chart();
  }, []);

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
        radius: 0,
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
            display: false,
          },
        },
      ],
      xAxes: [
        {
          maxBarThicness: 500,
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  return(
    <div className = 'canvas-container'>
      <Line data = {chartData} options = {options}/>
    </div>
  )
};

export default Grafico;
