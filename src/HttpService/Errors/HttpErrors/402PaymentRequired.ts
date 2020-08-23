import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class PaymentRequiredError extends HttpError {
  public static statusCode = 402;

  public constructor(err: RequestError) {
    super(PaymentRequiredError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(PaymentRequiredError);

export default PaymentRequiredError;
