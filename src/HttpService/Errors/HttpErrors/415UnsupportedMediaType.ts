import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class UnsupportedMediaTypeError extends HttpError {
  public static statusCode = 415;

  public constructor(err: RequestError) {
    super(UnsupportedMediaTypeError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(UnsupportedMediaTypeError);

export default UnsupportedMediaTypeError;
