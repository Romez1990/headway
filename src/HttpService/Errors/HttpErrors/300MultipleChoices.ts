import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class MultipleChoicesError extends HttpError {
  public static readonly statusCode = 300;

  public constructor(err: RequestError) {
    super(MultipleChoicesError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(MultipleChoicesError);

export default MultipleChoicesError;
