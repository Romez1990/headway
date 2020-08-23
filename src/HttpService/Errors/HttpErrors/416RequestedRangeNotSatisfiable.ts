import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class RequestedRangeNotSatisfiableError extends HttpError {
  public static statusCode = 416;

  public constructor(err: RequestError) {
    super(RequestedRangeNotSatisfiableError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(RequestedRangeNotSatisfiableError);

export default RequestedRangeNotSatisfiableError;
