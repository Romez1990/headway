import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class ExpectationFailedError extends HttpError {
  public static statusCode = 417;

  public constructor(err: RequestError) {
    super(ExpectationFailedError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(ExpectationFailedError);

export default ExpectationFailedError;
