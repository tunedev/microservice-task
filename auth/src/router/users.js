import { Router } from 'express'
import { signinSchema, checkForError } from '../middleware'
import { signin } from '../controller'

const router = Router()

router.post('/signin', signinSchema, checkForError, signin)

export { router as userRouter }
