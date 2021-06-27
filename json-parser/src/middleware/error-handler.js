import { CustomError } from '../errors'

export const errorHandler = (err, request, response, next) => {
  console.log('Error Occured ->', err)
  if (err instanceof CustomError) {
    return response
      .status(err.statusCode)
      .json({ errors: err.serializeErrors() })
  }

  return response.status(500).json({ errors: [{ message: 'something broke' }] })
}
