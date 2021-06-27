export class CustomError extends Error {
  constructor(message) {
    super(message)
    this.message = message
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
