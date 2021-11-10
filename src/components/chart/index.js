import './chart.scss';
import Chart from './chart';

const chartElements = document.querySelectorAll('.js-chart');

if (chartElements.length > 0) {
  chartElements.forEach((element) => new Chart(element));
}
