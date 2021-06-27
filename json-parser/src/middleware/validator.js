import jwt from 'jsonwebtoken'
import { body, validationResult } from 'express-validator'
import { RequestValidationError } from '../errors'
import { UnauthorizedError } from '../errors'

export const jsonPatchSchema = [
  body('object').custom((value) => {
    if (typeof value !== 'object') {
      throw new Error('json Object must be a valid JSON object/array/value')
    } else {
      return true
    }
  }),
  body('patch').custom((value) => {
    if (typeof value !== 'object' && !Array.isArray(value)) {
      console.log('e no reach')
      throw new Error('json Patch must be a valid JSON array')
    } else {
      return true
    }
  }),
]

export const checkForError = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array())
  }

  next()
}

export const authenticate = (req, res, next) => {
  let token =
    req.headers['x-access-token'] ||
    req.headers['authorization'] ||
    req.body.token
  if (!token) throw new UnauthorizedError()

  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length)
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_KEY)
    next()
  } catch (error) {
    throw new UnauthorizedError()
  }
}
