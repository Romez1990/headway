import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class RequestTimeoutError extends HttpError {
  public static statusCode = 408;

  public constructor(err: RequestError) {
    super(RequestTimeoutError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(RequestTimeoutError);

export default RequestTimeoutError;
