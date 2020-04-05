import { generateLoadUrl } from './helpers';
import { load } from './load';

const formCountrySearch = document.querySelector('#country-search');
const countrySearchInput = formCountrySearch.querySelector('.country-search__input');

const dataLoadErrorHandler = () => {
  console.log('Ошибка загрузки данных');
};

const dataLoadSuccessHandler = (data) => {
  const dataArray = data;
  console.log(dataArray);
  return dataArray;
};

const formCountrySearchSubmitHandler = (evt) => {
  evt.preventDefault();
  const inputContent = countrySearchInput.value;
  const newLoadUrl = generateLoadUrl(inputContent);
  console.log(newLoadUrl);
  load(dataLoadSuccessHandler, dataLoadErrorHandler, newLoadUrl);
};

formCountrySearch.onsubmit = formCountrySearchSubmitHandler;

export { dataLoadSuccessHandler };
