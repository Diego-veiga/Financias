import { Op } from 'sequelize'
import User from '../models/User'
import jwt from 'jsonwebtoken'
class TokenController {
  async auth(req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({
        where: {
          [Op.and]: [{ email }, { ativo: true }],
        },
      })
      if (!user) {
        return res.status(400).json({ message: 'Usuario  ou senha inválidos' })
      }
      if (!(await user.passwordIsValid(password))) {
        return res.status(400).json({ message: 'Usuario ou senha inválidos' })
      }

      const { id, nome } = user

      const token = await jwt.sign(
        { id, nome, email },
        process.env.TOKEN_SECRET,
        {
          expiresIn: 1800,
        }
      )

      return res.status(200).json({ token })
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }
}

export default new TokenController()
