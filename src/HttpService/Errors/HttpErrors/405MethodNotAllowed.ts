import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class MethodNotAllowedError extends HttpError {
  public static statusCode = 405;

  public constructor(err: RequestError) {
    super(MethodNotAllowedError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(MethodNotAllowedError);

export default MethodNotAllowedError;
