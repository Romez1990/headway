import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class FoundError extends HttpError {
  public static statusCode = 302;

  public constructor(err: RequestError) {
    super(FoundError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(FoundError);

export default FoundError;
