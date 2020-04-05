const createDataLabels = (array) => {
  const dataLabels = array;
  return dataLabels;
};

function ChartLine(label, data, backgroundColor, borderColor) {
  this.label = label;
  this.data = data;
  this.fill = false;
  this.backgroundColor = backgroundColor;
  this.borderColor = borderColor;
}

const createDataLines = (confirmedData, deathsData, recoveredData) => {
  const dataLines = [
    new ChartLine('Confirmed', confirmedData, 'rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.5)'),
    new ChartLine('Deaths', deathsData, 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.5)'),
    new ChartLine('Recovered', recoveredData, 'rgba(34, 182, 47, 1)', 'rgba(34, 182, 47, 0.5)'),
  ];
  return dataLines;
};


export { createDataLabels, createDataLines };
