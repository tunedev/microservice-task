import express, { json, urlencoded } from 'express'
import 'express-async-errors'
import '@babel/polyfill'
import cors from 'cors'
import logger from 'morgan'
import cookieSession from 'cookie-session'

import { NotFoundError } from './errors'
import { errorHandler } from './middleware'
import { userRouter } from './router'

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
)

app.use('/api/users', userRouter)

app.all('*', () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
