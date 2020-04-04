import { LOAD_URL } from './constants';

const generateLoadUrl = (countryName) => {
  const loadUrl = LOAD_URL + countryName.toLowerCase();
  return loadUrl;
};

export { generateLoadUrl };
