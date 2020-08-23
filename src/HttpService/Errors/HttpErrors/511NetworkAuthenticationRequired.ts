import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class NetworkAuthenticationRequiredError extends HttpError {
  public static statusCode = 511;

  public constructor(err: RequestError) {
    super(NetworkAuthenticationRequiredError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(NetworkAuthenticationRequiredError);

export default NetworkAuthenticationRequiredError;
