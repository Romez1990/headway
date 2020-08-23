import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class BadRequestError extends HttpError {
  public static statusCode = 400;

  public constructor(err: RequestError) {
    super(BadRequestError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(BadRequestError);

export default BadRequestError;
