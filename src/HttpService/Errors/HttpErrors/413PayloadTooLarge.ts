import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class PayloadTooLargeError extends HttpError {
  public static statusCode = 413;

  public constructor(err: RequestError) {
    super(PayloadTooLargeError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(PayloadTooLargeError);

export default PayloadTooLargeError;
