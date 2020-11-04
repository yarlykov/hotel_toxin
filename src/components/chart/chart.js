import Chart from 'chart.js';
import { data } from 'jquery';

const ctx = document.querySelector('.chart')
const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Великолепно","Хорошо","Удовлетворительно","Разочарован"],
    datasets: [{
      label: '# of Votes',
      data: [520, 260, 260],
      backgroundColor: [
        'yellow',
        'green',
        'purple',
        'black',
      ],
      borderWidth: 0,
      hoverBorderWidth: 5,
      hoverBackgroundColor: [
        'yellow',
      ]
    }]
  },
  options: {
    rotation: -1.5*Math.PI,
    circumference: 2*Math.PI,
    animation: {
      animateScale: true,
    },
    cutoutPercentage: 92,
    tooltips: {
      mode: 'point'
    },
    devicePixelRatio: 5,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    legend: {
      position: 'right',
      align: 'end',
      labels: {
        boxWidth: 10, 
        fontSize: 14,
        fontColor: 'rgba(31, 32, 65, 0.75)',
        fontFamily: "'Montserrat', 'san-serif'",
        padding: 14,
        usePointStyle: true,
      }
    },
  }
})