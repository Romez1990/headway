import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class PreconditionFailedError extends HttpError {
  public static statusCode = 412;

  public constructor(err: RequestError) {
    super(PreconditionFailedError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(PreconditionFailedError);

export default PreconditionFailedError;
