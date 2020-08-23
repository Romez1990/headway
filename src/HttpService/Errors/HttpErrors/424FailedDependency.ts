import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class FailedDependencyError extends HttpError {
  public static statusCode = 424;

  public constructor(err: RequestError) {
    super(FailedDependencyError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(FailedDependencyError);

export default FailedDependencyError;
