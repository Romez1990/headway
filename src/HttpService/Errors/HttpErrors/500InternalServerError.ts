import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class InternalServerError extends HttpError {
  public static statusCode = 500;

  public constructor(err: RequestError) {
    super(InternalServerError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(InternalServerError);

export default InternalServerError;
