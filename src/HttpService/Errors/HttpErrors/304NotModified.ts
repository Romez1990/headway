import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class NotModifiedError extends HttpError {
  public static statusCode = 304;

  public constructor(err: RequestError) {
    super(NotModifiedError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(NotModifiedError);

export default NotModifiedError;
