import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class TooManyRequestsError extends HttpError {
  public static statusCode = 429;

  public constructor(err: RequestError) {
    super(TooManyRequestsError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(TooManyRequestsError);

export default TooManyRequestsError;
