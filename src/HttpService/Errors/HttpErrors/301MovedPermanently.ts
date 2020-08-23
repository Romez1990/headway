import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class MovedPermanentlyError extends HttpError {
  public static statusCode = 301;

  public constructor(err: RequestError) {
    super(MovedPermanentlyError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(MovedPermanentlyError);

export default MovedPermanentlyError;
