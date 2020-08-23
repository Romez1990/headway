import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class UnprocessableEntityError extends HttpError {
  public static statusCode = 422;

  public constructor(err: RequestError) {
    super(UnprocessableEntityError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(UnprocessableEntityError);

export default UnprocessableEntityError;
