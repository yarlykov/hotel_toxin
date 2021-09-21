import './chart.scss';
import Chart from './chart';

const chartElement = document.querySelector('[data-id="chart"]');
const options = {
  votes: [
    {
      type: 'sumptuously',
      name: 'великолепно',
      votesAmount: 520,
      firstStopColor: '#FFE39C',
      secondStopColor: '#FFBA9C',
    },
    {
      type: 'good',
      votesAmount: 260,
      name: 'хорошо',
      firstStopColor: '#6FCF97',
      secondStopColor: '#66D2EA',
    },
    {
      type: 'satisfactorily',
      name: 'удовлетворительно',
      votesAmount: 260,
      firstStopColor: '#BC9CFF',
      secondStopColor: '#8BA4F9',
    },
    {
      type: 'disappointed',
      name: 'разочарован',
      votesAmount: 0,
      firstStopColor: '#919191',
      secondStopColor: '#3D4975',
    },
  ],
};

if (chartElement !== null) new Chart(chartElement, options);
