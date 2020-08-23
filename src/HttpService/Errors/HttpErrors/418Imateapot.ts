import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class ImateapotError extends HttpError {
  public static statusCode = 418;

  public constructor(err: RequestError) {
    super(ImateapotError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(ImateapotError);

export default ImateapotError;
