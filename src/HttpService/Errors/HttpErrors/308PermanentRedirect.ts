import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class PermanentRedirectError extends HttpError {
  public static statusCode = 308;

  public constructor(err: RequestError) {
    super(PermanentRedirectError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(PermanentRedirectError);

export default PermanentRedirectError;
