import express, { json, urlencoded } from 'express'
import 'express-async-errors'
import '@babel/polyfill'
import cors from 'cors'
import logger from 'morgan'

import { NotFoundError } from './errors'
import { errorHandler } from './middleware'
import { jsonPatchRouter } from './router'

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(logger('dev'))

app.use('/api/json-patch', jsonPatchRouter)

app.all('*', () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
