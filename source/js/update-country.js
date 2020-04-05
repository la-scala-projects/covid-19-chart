const countryLabel = document.querySelector('.page-main__country-title');

const updateCountry = (countryName) => {
  countryLabel.textContent = countryName.charAt(0).toUpperCase() + countryName.slice(1);
};

export { updateCountry };
