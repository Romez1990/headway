import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class NotExtendedError extends HttpError {
  public static statusCode = 510;

  public constructor(err: RequestError) {
    super(NotExtendedError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(NotExtendedError);

export default NotExtendedError;
