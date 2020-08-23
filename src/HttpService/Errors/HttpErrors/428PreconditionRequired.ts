import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class PreconditionRequiredError extends HttpError {
  public static statusCode = 428;

  public constructor(err: RequestError) {
    super(PreconditionRequiredError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(PreconditionRequiredError);

export default PreconditionRequiredError;
