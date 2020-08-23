import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class UpgradeRequiredError extends HttpError {
  public static statusCode = 426;

  public constructor(err: RequestError) {
    super(UpgradeRequiredError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(UpgradeRequiredError);

export default UpgradeRequiredError;
