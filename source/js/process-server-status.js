const XHR_READY_STATE_READY = 4;
const TIMEOUT_IN_MS = 5000;

const Code = {
  SUCCESS: 200,
  REQUEST_ERROR: 400,
  ACCESS_ERROR: 403,
  NOT_FOUND_ERROR: 404,
  SERVER_ERROR: 500,
  RESPONSE_ERROR: 502,
  SERVICE_UNAVIALABLE: 503,
};

const processServerStatus = (xhr, onLoad, onError) => {
  xhr.responseType = 'json';

  xhr.addEventListener('load', () => {
    if (xhr.readyState === XHR_READY_STATE_READY) {
      if (xhr.status === Code.SUCCESS) {
        onLoad(xhr.response);
      } else {
        switch (xhr.status) {
          case Code.REQUEST_ERROR:
            onError('Error 400: Bad Request');
            break;
          case Code.ACCESS_ERROR:
            onError('Error 403: Forbidden');
            break;
          case Code.NOT_FOUND_ERROR:
            onError('Error 404: Not Found');
            break;
          case Code.SERVER_ERROR:
            onError('Error 500: Internal Server Error');
            break;
          case Code.RESPONSE_ERROR:
            onError('Error 502: Bad Gateway');
            break;
          case Code.SERVICE_UNAVIALABLE:
            onError('Error 503: Service Unavailable');
            break;
          default:
            onError(`Request status: ${xhr.status} ${xhr.statusText}`);
        }
      }
    }
  });

  xhr.addEventListener('error', () => {
    onError('Network error');
  });
  xhr.addEventListener('timeout', () => {
    onError(`Request exited with timeout ${xhr.timeout} ms`);
  });

  xhr.timeout = TIMEOUT_IN_MS;
};

export { processServerStatus };
