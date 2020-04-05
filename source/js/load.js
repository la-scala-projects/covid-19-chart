import { processServerStatus } from './process-server-status';

const load = (onLoad, onError, url) => {
  const xhrLoad = new XMLHttpRequest();
  xhrLoad.open('GET', url);
  processServerStatus(xhrLoad, onLoad, onError);
  xhrLoad.send();
};

export { load };
