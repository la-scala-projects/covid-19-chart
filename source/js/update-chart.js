const updateChart = (chart, datasets) => {
  chart.data.datasets = datasets;
  chart.update();
};

export { updateChart };
