import { Option, some, none } from 'fp-ts/lib/Option';
import { RegexError } from '../../Error';
import NetworkError, { RequestError } from './NetworkError';

class HttpError extends NetworkError {
  response;

  constructor(statusCode, RequestError) {
    super(`Request failed with status code ${statusCode}`, err);
    if (statusCode < 500) {
      this.response = err.response?.data;
    }
  }

  static identifySubError(err) {
    const match = err.message.match(
      /^Request failed with status code (?<code>\d{3})$/,
    );
    if (match === null) return none;
    if (typeof match.groups === 'undefined')
      throw new RegexError('Groups are not defined');

    const { code } = match.groups;
    const HttpErrorSubclass = HttpError.httpErrorSubclasses[code];
    return some(new HttpErrorSubclass(err));
  }

  static httpErrorSubclasses = {};

  static addHttpErrorSubclass(
    subclass,
  ) {
    const statusCode = subclass.statusCode.toString();
    this.httpErrorSubclasses[statusCode] = subclass;
  }
}

NetworkError.addSubclass(HttpError);

export default HttpError;
