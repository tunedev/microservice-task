import request from 'supertest'
import '@babel/polyfill'
import { app } from '../app'

beforeAll(async () => {
  process.env.JWT_KEY = 'canyoukeepasecret'
})

global.signin = async (user) => {
  const response = await request(app)
    .post('/api/users/signin')
    .send(user)
    .expect(200)

  return response.get('Set-Cookie')
}
