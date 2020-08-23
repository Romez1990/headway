import { AxiosError } from 'axios';
import { pipe } from 'fp-ts/lib/pipeable';
import { map } from 'fp-ts/lib/Array';
import { prod } from '../../Env';
import { AppError, identifyError, ErrorIdentifier } from '../../Error';

class NetworkError extends AppError {
  requestError;

  constructor(message, requestError) {
    super(message);
    // eslint-disable-next-line no-param-reassign
    delete requestError.stack;
    if (prod) {
      this.requestError = requestError;
    } else {
      delete this.requestError;
    }
  }

  static identify(err) {
    return pipe(
      NetworkError.subclasses,
      map(subclass => subclass.identifySubError),
      identifyError(err),
    );
  }

  static subclasses = [];

  static addSubclass(subclass) {
    this.subclasses.push(subclass);
  }
}

export default NetworkError;
