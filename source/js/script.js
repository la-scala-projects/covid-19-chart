import moment from 'moment';

import { renderChart } from './render-chart';
import { updateChart } from './update-chart';
import { generateLoadUrl } from './helpers';
import { updateCountry } from './update-country';
import { updateSyncTime } from './update-sync-time';
import { load } from './load';
import { createErrorMessage } from './show-error';
import { createDataLabels, createDataLines } from './data';

const formCountrySearch = document.querySelector('#country-search');
const countrySearchInput = formCountrySearch.querySelector('.country-search__input');
const container = document.querySelector('.page-main .container');

let myChart;

const dataLoadErrorHandler = (error) => {
  createErrorMessage(error);
};

const dataLoadSuccessHandler = (data) => {
  const {
    confirmed, dates, deaths, recovered,
  } = data;
  const dataLabels = createDataLabels(dates);
  const dataSets = createDataLines(confirmed, deaths, recovered);

  if (container.classList.contains('container--hidden')) {
    container.classList.remove('container--hidden');
  }

  if (!myChart) {
    myChart = renderChart(dataLabels, dataSets);
  } else {
    updateChart(myChart, dataSets);
  }
};

const formCountrySearchSubmitHandler = (evt) => {
  evt.preventDefault();
  const inputContent = countrySearchInput.value;
  const newLoadUrl = generateLoadUrl(inputContent);

  load(dataLoadSuccessHandler, dataLoadErrorHandler, newLoadUrl);
  updateCountry(inputContent.toLowerCase());
  const newSyncTime = moment().format('LLL');
  updateSyncTime(newSyncTime);
};

formCountrySearch.onsubmit = formCountrySearchSubmitHandler;

export { dataLoadSuccessHandler };
