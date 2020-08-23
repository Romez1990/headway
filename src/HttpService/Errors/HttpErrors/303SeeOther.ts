import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class SeeOtherError extends HttpError {
  public static statusCode = 303;

  public constructor(err: RequestError) {
    super(SeeOtherError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(SeeOtherError);

export default SeeOtherError;
