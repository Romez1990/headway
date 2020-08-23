import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class ForbiddenError extends HttpError {
  public static statusCode = 403;

  public constructor(err: RequestError) {
    super(ForbiddenError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(ForbiddenError);

export default ForbiddenError;
