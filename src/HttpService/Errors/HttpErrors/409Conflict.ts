import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class ConflictError extends HttpError {
  public static statusCode = 409;

  public constructor(err: RequestError) {
    super(ConflictError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(ConflictError);

export default ConflictError;
