import { RequestError } from '../NetworkError';
import HttpError from '../HttpError';

class ClientClosedRequestError extends HttpError {
  public static statusCode = 499;

  public constructor(err: RequestError) {
    super(ClientClosedRequestError.statusCode, err);
  }
}

HttpError.addHttpErrorSubclass(ClientClosedRequestError);

export default ClientClosedRequestError;
