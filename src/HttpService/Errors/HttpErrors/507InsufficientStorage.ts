import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class InsufficientStorageError extends HttpError {
  public static statusCode = 507;

  public constructor(err: RequestError) {
    super(InsufficientStorageError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(InsufficientStorageError);

export default InsufficientStorageError;
