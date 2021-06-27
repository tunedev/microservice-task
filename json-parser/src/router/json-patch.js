import { Router } from 'express'
import { jsonPatchSchema, checkForError, authenticate } from '../middleware'
import { addPatch } from '../controller'

const router = Router()

router.post('/', jsonPatchSchema, checkForError, authenticate, addPatch)

export { router as jsonPatchRouter }
