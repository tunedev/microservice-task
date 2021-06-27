import request from 'supertest'
import { app } from '../../app'

it('signs in successfully', async () => {
  const userDetails = { username: 'test@mail.com', password: 'password' }

  const response = await request(app)
    .post('/api/users/signin')
    .send(userDetails)
    .expect(200)
  expect(response.body.data).toHaveProperty('token')
  expect(response.body.data.username).toEqual(userDetails.username)
})

it('fails for an invalid in request data', async () => {
  const response = await request(app)
    .post('/api/users/signin')
    .send({})
    .expect(400)

  expect(response.body).toHaveProperty('errors')
})
