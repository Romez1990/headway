import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class NetworkConnectTimeoutErrorError extends HttpError {
  public static statusCode = 599;

  public constructor(err: RequestError) {
    super(NetworkConnectTimeoutErrorError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(NetworkConnectTimeoutErrorError);

export default NetworkConnectTimeoutErrorError;
