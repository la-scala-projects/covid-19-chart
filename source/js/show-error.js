/* eslint-disable no-use-before-define */
import { Keycode } from './constants';

const main = document.querySelector('.page-main');

const closeErrorWindow = () => {
  const errorWindow = document.querySelector('.error');
  main.removeChild(errorWindow);
  document.removeEventListener('click', documentClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

const errorButtonClickHandler = () => {
  closeErrorWindow();
};

const documentClickHandler = (evt) => {
  const errorInner = document.querySelector('.error__inner');

  if (evt.target !== errorInner) {
    closeErrorWindow();
  }
};

const documentKeydownHandler = (evt) => {
  if (evt.key === Keycode.ESC_KEY) {
    closeErrorWindow();
  }
};

const addHandlers = (errorPopup) => {
  const errorButton = errorPopup.querySelector('.error__button');

  errorButton.addEventListener('click', errorButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  document.addEventListener('click', documentClickHandler);
};

const createErrorMessage = (errorMessage) => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');

  const newError = errorTemplate.cloneNode(true);
  const errorTitle = newError.querySelector('.error__title');

  const fragment = document.createDocumentFragment();

  errorTitle.textContent = errorMessage;
  errorTitle.style = 'line-height: 1.5;';

  fragment.appendChild(newError);
  main.appendChild(fragment);

  addHandlers(newError);
};

export { createErrorMessage };
