import User from '../models/User'

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body)
      return res.status(201).json(newUser)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async show(req, res) {
    try {
      const user = await User.findOne({ where: { id: req.params.id } })
      return res.status(200).json(user)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll()
      return res.status(200).json(users)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async update(req, res) {
    try {
      const user = await User.findOne({ where: { id: req.params.id } })
      if (!user) {
        return res.status(400).json({ message: 'Usuario não encontrado' })
      }
      const userUpdated = await user.update(req.body)
      return res.status(200).json(userUpdated)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }
}

export default new UserController()
