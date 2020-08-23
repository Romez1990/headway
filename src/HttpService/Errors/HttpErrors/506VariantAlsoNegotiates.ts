import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class VariantAlsoNegotiatesError extends HttpError {
  public static statusCode = 506;

  public constructor(err: RequestError) {
    super(VariantAlsoNegotiatesError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(VariantAlsoNegotiatesError);

export default VariantAlsoNegotiatesError;
