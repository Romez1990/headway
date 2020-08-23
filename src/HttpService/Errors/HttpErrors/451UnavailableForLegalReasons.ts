import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class UnavailableForLegalReasonsError extends HttpError {
  public static statusCode = 451;

  public constructor(err: RequestError) {
    super(UnavailableForLegalReasonsError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(UnavailableForLegalReasonsError);

export default UnavailableForLegalReasonsError;
