import { CustomError } from './CustomErrors'

export class NotFoundError extends CustomError {
  statusCode = 404
  constructor() {
    super('Not Found')
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }
}
