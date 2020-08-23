import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class BadGatewayError extends HttpError {
  public static statusCode = 502;

  public constructor(err: RequestError) {
    super(BadGatewayError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(BadGatewayError);

export default BadGatewayError;
