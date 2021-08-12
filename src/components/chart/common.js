import Chart from './Chart';

const chartElement = document.querySelector('[data-id="chart"]');
const options = {
  votes: {
    sumptuously: 520,
    good: 260,
    satisfactorily: 260,
    disappointed: 0,
  },
};

if (chartElement !== null) new Chart(chartElement, options);
