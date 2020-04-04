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

const processServerStatus = (xhr, onLoad, onError, errorButtonText) => {
  xhr.responseType = 'json';

  xhr.addEventListener('load', () => {
    if (xhr.readyState === XHR_READY_STATE_READY) {
      if (xhr.status === Code.SUCCESS) {
        onLoad(xhr.response);
      } else {
        switch (xhr.status) {
          case Code.REQUEST_ERROR:
            onError('Ошибка 400: Неверный запрос', errorButtonText);
            break;
          case Code.ACCESS_ERROR:
            onError('Ошибка 403: Доступ запрещен', errorButtonText);
            break;
          case Code.NOT_FOUND_ERROR:
            onError('Ошибка 404: Ничего не найдено', errorButtonText);
            break;
          case Code.SERVER_ERROR:
            onError('Ошибка 500: Ошибка сервера', errorButtonText);
            break;
          case Code.RESPONSE_ERROR:
            onError('Ошибка 502: Неверный ответ сервера', errorButtonText);
            break;
          case Code.SERVICE_UNAVIALABLE:
            onError('Ошибка 503: Сервер временно недоступен', errorButtonText);
            break;
          default:
            onError(`Cтатус ответа: : ${xhr.status} ${xhr.statusText}`);
        }
      }
    }
  });

  xhr.addEventListener('error', () => {
    onError('Произошла ошибка соединения', errorButtonText);
  });
  xhr.addEventListener('timeout', () => {
    onError(`Запрос не выполнился за ${xhr.timeout}мс`, errorButtonText);
  });

  xhr.timeout = TIMEOUT_IN_MS;
};

export { processServerStatus };
