import { body, validationResult } from 'express-validator'
import { RequestValidationError } from '../errors'

export const signinSchema = [
  body('username').isEmail().withMessage('Username must be an email'),
  body('password').trim().notEmpty().withMessage('Password is required'),
]

export const checkForError = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array())
  }

  next()
}
