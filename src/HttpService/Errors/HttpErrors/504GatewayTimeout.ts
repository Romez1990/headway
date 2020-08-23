import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class GatewayTimeoutError extends HttpError {
  public static statusCode = 504;

  public constructor(err: RequestError) {
    super(GatewayTimeoutError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(GatewayTimeoutError);

export default GatewayTimeoutError;
