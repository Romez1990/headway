import { IncomingMessage } from 'http';
import { pipe } from 'fp-ts/lib/pipeable';
import { map } from 'fp-ts/lib/TaskEither';
import { Type, literal } from 'io-ts';
import request from './request';

const HttpService = {
  get,
  post,
  put,
  patch,
  delete: deleteFunc,
};

function get(
  url,
  type,
  auth,
) {
  return requestHelper({ method: 'get', url }, type, auth);
}

function post(
  url,
  type,
  data,
  auth,
) {
  return requestHelper({ method: 'post', url, data }, type, auth);
}

function put(
  url,
  type,
  data,
  auth,
) {
  return requestHelper({ method: 'put', url, data }, type, auth);
}

function patch(
  url,
  type,
  data,
  auth,
) {
  return requestHelper({ method: 'patch', url, data }, type, auth);
}

function deleteFunc(
  url,
  auth,
) {
  return requestHelper(
    { method: 'delete', url },
    literal(''),
    auth,
  );
}

function requestHelper(
  requestParams,
  type,
  auth,
) {
  let response;
  if (auth instanceof IncomingMessage) {
    response = request(requestParams, type, auth);
  } else if (typeof auth === 'string') {
    response = request(requestParams, type, auth);
  } else if (typeof auth === 'boolean') {
    response = request(requestParams, type, auth);
  } else {
    response = request(requestParams, type);
  }
  return pipe(response, map(getData));
}

function getData(response) {
  return response.data;
}

export default HttpService;
