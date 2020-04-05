import { renderChart } from './render-chart';
import { generateLoadUrl } from './helpers';
import { load } from './load';
import { createDataLabels, createDataLines } from './data';

const formCountrySearch = document.querySelector('#country-search');
const countrySearchInput = formCountrySearch.querySelector('.country-search__input');
let myChart;

const dataLoadErrorHandler = () => {
  console.log('Error loading data');
};

const dataLoadSuccessHandler = (data) => {
  const {
    confirmed, dates, deaths, recovered,
  } = data;
  const dataLabels = createDataLabels(dates);
  const dataSets = createDataLines(confirmed, deaths, recovered);
  console.log(myChart);
  if (!myChart) {
    myChart = renderChart(dataLabels, dataSets);
  } else {
    console.log('Update chart');
    // updateChart();
  }
};

const formCountrySearchSubmitHandler = (evt) => {
  evt.preventDefault();
  const inputContent = countrySearchInput.value;
  const newLoadUrl = generateLoadUrl(inputContent);
  load(dataLoadSuccessHandler, dataLoadErrorHandler, newLoadUrl);
};

formCountrySearch.onsubmit = formCountrySearchSubmitHandler;

export { dataLoadSuccessHandler };
