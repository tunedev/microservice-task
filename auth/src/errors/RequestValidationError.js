import { ValidationError } from 'express-validator'
import { CustomError } from './CustomErrors'

export class RequestValidationError extends CustomError {
  statusCode = 400
  constructor(errors) {
    super('invalid request body')
    this.errors = errors

    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeErrors() {
    return this.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }))
  }
}
