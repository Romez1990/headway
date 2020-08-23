import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class LoopDetectedError extends HttpError {
  public static statusCode = 508;

  public constructor(err: RequestError) {
    super(LoopDetectedError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(LoopDetectedError);

export default LoopDetectedError;
