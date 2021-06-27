import { CustomError } from './CustomErrors'

export class UnprocessableRequest extends CustomError {
  statusCode = 422
  constructor(reason) {
    super(reason)
    this.reason = reason
    Object.setPrototypeOf(this, UnprocessableRequest.prototype)
  }

  serializeErrors() {
    return [{ message: this.reason }]
  }
}
