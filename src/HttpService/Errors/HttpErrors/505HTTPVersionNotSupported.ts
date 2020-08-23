import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class HTTPVersionNotSupportedError extends HttpError {
  public static statusCode = 505;

  public constructor(err: RequestError) {
    super(HTTPVersionNotSupportedError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(HTTPVersionNotSupportedError);

export default HTTPVersionNotSupportedError;
