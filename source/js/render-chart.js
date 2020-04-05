import Chart from 'chart.js';

const ctx = document.querySelector('#myChart');

const renderChart = (labels, datasets) => {
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets,
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

  return myChart;
};

export { renderChart };
