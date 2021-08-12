import Chart from './chart';

const chartElement = document.querySelector('[data-id="chart"]');
const options = {
  votes: {
    sumptuously: 520,
    good: 260,
    satisfactorily: 260,
    disappointed: 0,
  },
};
if (chartElement) new Chart(chartElement, options);
