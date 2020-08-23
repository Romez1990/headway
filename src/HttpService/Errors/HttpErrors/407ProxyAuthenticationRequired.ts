import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class ProxyAuthenticationRequiredError extends HttpError {
  public static statusCode = 407;

  public constructor(err: RequestError) {
    super(ProxyAuthenticationRequiredError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(ProxyAuthenticationRequiredError);

export default ProxyAuthenticationRequiredError;
