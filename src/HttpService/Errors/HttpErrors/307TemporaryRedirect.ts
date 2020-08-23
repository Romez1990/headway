import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class TemporaryRedirectError extends HttpError {
  public static statusCode = 307;

  public constructor(err: RequestError) {
    super(TemporaryRedirectError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(TemporaryRedirectError);

export default TemporaryRedirectError;
