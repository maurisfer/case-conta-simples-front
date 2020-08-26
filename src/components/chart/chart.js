import React, {useState, useEffect} from 'react';
import { Line, defaults } from 'react-chartjs-2';
import './chart.css';
import axios from 'axios';

defaults.global.maintainAspectRatio = false


const Grafico = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
      datasets: [
        {
          label: 'Entrada',
          data: [0, 1000, 550, 3000, 200],
          backgroundColor: [
            'rgba(0, 190, 62, 0.2)'
          ],
          borderColor: [
            'rgba(0, 190, 62, 0.4)'
          ],
          borderWidth: 3
        },
        {
          label: 'Entrada',
          data: [0, 1500, 350, 3500, 250],
          backgroundColor: [
            'rgba(412, 90, 62, 0.2)'
          ],
          borderColor: [
            'rgba(412, 90, 62, 0.4)'
          ],
          borderWidth: 3
        }
      ]
    })
  }

  useEffect(() => {
    chart()
  }, [])

  const options = {
    layout: {
      padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
      }
  },
    elements: {
      point:{
        radius: 0
      }
    },
    legend: { display: false },
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
            display: false
          },
          gridLines: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          maxBarThickness: 500,
          gridLines: {
            display: false
          }
        }
      ]
    }

  };

  return(
    <div className="canvas-container">
    <h3>Entrada vs Saída</h3>
    <Line data={chartData} options={options} />
  </div>
  )
}

export default Grafico;
