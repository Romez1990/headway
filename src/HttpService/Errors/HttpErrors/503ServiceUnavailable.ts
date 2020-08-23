import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class ServiceUnavailableError extends HttpError {
  public static statusCode = 503;

  public constructor(err: RequestError) {
    super(ServiceUnavailableError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(ServiceUnavailableError);

export default ServiceUnavailableError;
