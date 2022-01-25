import jwt from 'jsonwebtoken'
export default async (req, res, next) => {
  try {
    const { authorization } = req.headers
    if (!authorization) {
      return res.status(401).json({ message: 'Token inválido' })
    }
    const [, token] = authorization.split(' ')
    const dados = await jwt.verify(token, process.env.TOKEN_SECRET)
    const { id, userEmail } = dados
    req.userId = id
    req.userEmail = userEmail
    next()
  } catch (e) {
    return res.status(500).json({ errors: e.errors.map((err) => err.message) })
  }
}
