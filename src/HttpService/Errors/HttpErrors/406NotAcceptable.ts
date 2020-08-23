import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class NotAcceptableError extends HttpError {
  public static statusCode = 406;

  public constructor(err: RequestError) {
    super(NotAcceptableError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(NotAcceptableError);

export default NotAcceptableError;
