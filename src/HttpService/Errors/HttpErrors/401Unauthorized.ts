import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class UnauthorizedError extends HttpError {
  public static statusCode = 401;

  public constructor(err: RequestError) {
    super(UnauthorizedError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(UnauthorizedError);

export default UnauthorizedError;
