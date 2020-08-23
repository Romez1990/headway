import { some, none } from 'fp-ts/lib/Option';
import { RegexError } from '../../Error';
import NetworkError from './NetworkError';

class NoConnectionError extends NetworkError {
  constructor(host, err) {
    super(`No connection to host ${host}`, err);
  }

  static identifySubError(err) {
    const match = err.message.match(/^connect ECONNREFUSED (?<host>.+)$/);
    if (match === null) return none;
    if (typeof match.groups === 'undefined')
      throw new RegexError('Groups are not defined');

    const { host } = match.groups;
    return some(new NoConnectionError(host, err));
  }
}

NetworkError.addSubclass(NoConnectionError);

export default NoConnectionError;
