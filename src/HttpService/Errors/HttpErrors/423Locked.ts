import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class LockedError extends HttpError {
  public static statusCode = 423;

  public constructor(err: RequestError) {
    super(LockedError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(LockedError);

export default LockedError;
