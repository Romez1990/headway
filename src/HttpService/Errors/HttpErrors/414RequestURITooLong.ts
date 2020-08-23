import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class RequestURITooLongError extends HttpError {
  public static statusCode = 414;

  public constructor(err: RequestError) {
    super(RequestURITooLongError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(RequestURITooLongError);

export default RequestURITooLongError;
