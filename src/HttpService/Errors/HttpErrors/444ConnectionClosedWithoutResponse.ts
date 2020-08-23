import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class ConnectionClosedWithoutResponseError extends HttpError {
  public static statusCode = 444;

  public constructor(err: RequestError) {
    super(ConnectionClosedWithoutResponseError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(ConnectionClosedWithoutResponseError);

export default ConnectionClosedWithoutResponseError;
