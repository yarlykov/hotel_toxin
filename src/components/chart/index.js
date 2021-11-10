import './chart.scss';
import Chart from './chart';

const chartElement = document.querySelector('[data-id="chart"]');
const options = {
  votes: [
    {
      id: 'sumptuously',
      name: 'великолепно',
      firstStopColor: '#FFE39C',
      secondStopColor: '#FFBA9C',
    },
    {
      id: 'good',
      name: 'хорошо',
      firstStopColor: '#6FCF97',
      secondStopColor: '#66D2EA',
    },
    {
      id: 'satisfactorily',
      name: 'удовлетворительно',
      firstStopColor: '#BC9CFF',
      secondStopColor: '#8BA4F9',
    },
    {
      id: 'disappointed',
      name: 'разочарован',
      firstStopColor: '#919191',
      secondStopColor: '#3D4975',
    },
  ],
};

if (chartElement !== null) new Chart(chartElement, options);
