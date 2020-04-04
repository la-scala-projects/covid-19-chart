import Chart from 'chart.js';
import './country-search-form';
import { dataLines, dataLabels } from './data';

const ctx = document.querySelector('#myChart');

// eslint-disable-next-line no-unused-vars
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dataLabels,
    datasets: dataLines,
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
