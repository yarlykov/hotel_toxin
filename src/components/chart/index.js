import './chart.scss';
import Chart from './chart';

const chartElements = document.querySelectorAll('.js-chart');

if (chartElements.length > 0) {
  chartElements.forEach((element) => {
    const chartId = element.dataset.id;
    new Chart(chartId, element);
  });
}
