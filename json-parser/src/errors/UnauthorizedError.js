import { CustomError } from './CustomErrors'

export class UnauthorizedError extends CustomError {
  statusCode = 401

  constructor() {
    super('Unauthorized Request')

    Object.setPrototypeOf(this, UnauthorizedError.prototype)
  }

  serializeErrors() {
    return [{ message: 'Not Authorized' }]
  }
}
