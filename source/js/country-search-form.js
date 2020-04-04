import { generateLoadUrl } from './helpers';

const formCountrySearch = document.querySelector('#country-search');
const countrySearchInput = formCountrySearch.querySelector('.country-search__input');
// const showDataButton = formCountrySearch.querySelector('.country-search__button');

const formCountrySearchSubmitHandler = (evt) => {
  evt.preventDefault();
  const inputContent = countrySearchInput.value;
  const newLoadUrl = generateLoadUrl(inputContent);
  console.log(newLoadUrl);
};

formCountrySearch.onsubmit = formCountrySearchSubmitHandler;
