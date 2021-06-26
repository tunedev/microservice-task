import '@babel/polyfill'

beforeAll(async () => {
  process.env.JWT_KEY = 'canyoukeepasecret'
})
