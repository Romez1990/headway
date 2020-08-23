import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class NotFoundError extends HttpError {
  public static statusCode = 404;

  public constructor(err: RequestError) {
    super(NotFoundError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(NotFoundError);

export default NotFoundError;
