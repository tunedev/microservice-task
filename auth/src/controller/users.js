import randomstring from 'randomstring'
import jwt from 'jsonwebtoken'

export const signin = (req, res) => {
  const { username } = req.body

  // Generte random strings and pass it as id
  const id = randomstring.generate()

  // Generate JWT
  const userToken = jwt.sign({ id, username }, process.env.JWT_KEY)

  // Store it on the request session
  req.session = { jwt: userToken }

  res.status(200).json({
    message: 'Welcome',
    data: { username, id, token: userToken },
  })
}
