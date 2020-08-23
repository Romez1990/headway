import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class NotImplementedError extends HttpError {
  public static statusCode = 501;

  public constructor(err: RequestError) {
    super(NotImplementedError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(NotImplementedError);

export default NotImplementedError;
