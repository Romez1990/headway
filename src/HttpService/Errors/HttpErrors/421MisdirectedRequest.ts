import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class MisdirectedRequestError extends HttpError {
  public static statusCode = 421;

  public constructor(err: RequestError) {
    super(MisdirectedRequestError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(MisdirectedRequestError);

export default MisdirectedRequestError;
