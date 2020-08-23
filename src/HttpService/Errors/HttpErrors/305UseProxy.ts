import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class UseProxyError extends HttpError {
  public static statusCode = 305;

  public constructor(err: RequestError) {
    super(UseProxyError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(UseProxyError);

export default UseProxyError;
