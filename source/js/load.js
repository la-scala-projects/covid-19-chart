import { LOAD_URL } from './constants';
import { processServerStatus } from './process-server-status';

const load = (onLoad, onError) => {
  const xhrLoad = new XMLHttpRequest();
  xhrLoad.open('GET', LOAD_URL);
  processServerStatus(xhrLoad, onLoad, onError);
  xhrLoad.send();
};

export { load };
