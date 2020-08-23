import { IncomingMessage } from 'http';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { pipe } from 'fp-ts/lib/pipeable';
import { isNone } from 'fp-ts/lib/Option';
import { mapLeft } from 'fp-ts/lib/Either';
import { TaskEither, tryCatch, map } from 'fp-ts/lib/TaskEither';
import { Type } from 'io-ts';
import { check } from '../TypeCheck';
import CookieService from '../CookieService';
import axios from './axios';
import { NetworkError, RequestError } from './Errors';

function request(requestParams, type, auth) {
  return pipe(
    requestParams,
    addBaseUrl,
    addAuthorization(auth),
    sendRequest(),
    map(checkType(type)),
  );
}

function addBaseUrl(requestParams) {
  return {
    ...requestParams,
    baseURL: `${process.env.SERVER_URL}/api`,
  };
}

const addAuthorization = auth => requestConfig => {
  if (typeof auth === 'boolean') return requestConfig;
  let token;
  if (typeof auth === 'string') {
    token = auth;
  } else {
    const tokenOption =
      typeof auth === 'undefined'
        ? CookieService.get('token')
        : CookieService.get('token', auth);
    if (isNone(tokenOption)) return requestConfig;
    token = tokenOption.value;
  }

  return {
    ...requestConfig,
    headers: {
      ...requestConfig.headers,
      Authorization: `Token ${token}`,
    },
  };
};

const sendRequest = () => requestConfig => {
  return tryCatch(
    () => axios.request(requestConfig),
    err => processError(err),
  );
};

function processError(err) {
  if (!(err instanceof Error)) throw err;
  const requestError = err;
  if (!requestError.isAxiosError) throw err;
  return NetworkError.identify(requestError);
}

const checkType = type => response => {
  pipe(
    check(type, response.data),
    mapLeft(err => {
      throw err;
    }),
  );
  return response;
};

export default request;
