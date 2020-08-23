import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class GoneError extends HttpError {
  public static statusCode = 410;

  public constructor(err: RequestError) {
    super(GoneError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(GoneError);

export default GoneError;
