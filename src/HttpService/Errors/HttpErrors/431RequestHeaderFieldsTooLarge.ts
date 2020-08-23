import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class RequestHeaderFieldsTooLargeError extends HttpError {
  public static statusCode = 431;

  public constructor(err: RequestError) {
    super(RequestHeaderFieldsTooLargeError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(RequestHeaderFieldsTooLargeError);

export default RequestHeaderFieldsTooLargeError;
