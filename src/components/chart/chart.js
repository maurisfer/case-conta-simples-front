import React, { Component, useState, useEffect } from 'react';
import { Line, defaults } from 'react-chartjs-2';
import './chart.css';
import api from '../../services/api';

defaults.global.maintainAspectRatio = false

const data = {
	labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta',],
	datasets: [
		{
      label: 'Entrada',
      fill: false,
			lineTension: 0.3,
			backgroundColor: 'rgba(0, 190, 62, 0.2)',
			borderColor: 'rgba(0, 190, 62, 0.4)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			pointBackgroundColor: 'rgba(0, 190, 62, 0.4)',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(0, 190, 62, 0.4)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [0, 29, 30, 81, 40]
    },
    {
      label: 'Saída',
      fill: false,
			lineTension: 0.3,
			backgroundColor: 'rgba(412, 90, 62, 0.2)',
			borderColor: 'rgba(412, 90, 62, 0.4)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(412, 90, 62, 0.4)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(412, 90, 62, 0.4)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
      data: [25, 39, 90, 51, 56],
		}
	]
};

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

class Chart extends Component {
	render() {
		return (
			<div className="canvas-container">
        <h3>Entrada vs Saída</h3>
				<Line data={data} options={options} />
			</div>
		);
	}
};

export default Chart;
