import React, { useState, useEffect } from 'react';
import { Line, defaults } from 'react-chartjs-2';
import './chart.css';
// import axios from 'axios';

defaults.global.maintainAspectRatio = false;

const Grafico = () => {
  const [chartData, setChartData] = useState({});

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
          label: 'Entrada',
<<<<<<< HEAD
          data: [0, 10, 500, 20, 1000, 550, 3000, 200, 100, 5000, 110],
          backgroundColor: ['rgba(0, 190, 62, 0.2)'],
          borderColor: ['rgba(0, 190, 62, 0.4)'],
          borderWidth: 3,
        },
        {
          label: 'Entrada',
          data: [0, 2000, 3000, 3000, 2000, 1000, 350, 3500, 250, 100, 200],
          backgroundColor: ['rgba(412, 90, 62, 0.2)'],
          borderColor: ['rgba(412, 90, 62, 0.4)'],
          borderWidth: 3,
        },
      ],
    });
  };
=======
<<<<<<< HEAD
          data: [0, 1000, 550, 3000, 200], //Irá consumir backend
=======
          data: [0,10, 500, 20, 1000, 550, 3000, 200, 100, 5000, 110 ], // Irá consumir do backend
>>>>>>> 3b956335ba7ad3f0679799db1b6294c3f957e7f5
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
<<<<<<< HEAD
          data: [0, 1500, 350, 3500, 250], // Irá consumir o backend
=======
          data: [0,2000, 3000, 3000, 2000, 1000, 350, 3500, 250, 100, 200], //Irá consumir do backend
>>>>>>> 3b956335ba7ad3f0679799db1b6294c3f957e7f5
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
>>>>>>> 0cd9fc3db5acefc4dd48084da0e5724742ba91fa

  useEffect(() => {
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
        radius: 2,
      },
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
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          maxBarThickness: 500,
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div className="canvas-container">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Grafico;
