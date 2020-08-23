import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class LengthRequiredError extends HttpError {
  public static statusCode = 411;

  public constructor(err: RequestError) {
    super(LengthRequiredError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(LengthRequiredError);

export default LengthRequiredError;
