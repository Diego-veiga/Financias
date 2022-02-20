import bankingModel from '../models/Banking'
import User from '../models/User'
import { Op } from 'sequelize'
class BankingController {
  async store(req, res) {
    try {
      const bankingCreate = {
        name: req.body.name,
        user_id: req.userId,
        active: req.body.active,
      }
      console.log('------bankingCreate', bankingCreate)
      const newBanking = await bankingModel.create(bankingCreate)
      return res.status(201).json(newBanking)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async show(req, res) {
    try {
      const banks = await bankingModel.findAll({
        attributes: ['id', 'name', 'active', 'default'],
        where: { [Op.or]: [{ user_id: null }, { user_id: req.userId }] },
        include: {
          model: User,
          attributes: ['id', 'nome', 'email'],
        },
      })
      return res.status(200).json(banks)
    } catch (e) {
      return res.status(500).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async index(req, res) {
    try {
      const { id } = req.params
      const bank = await bankingModel.findOne({
        attributes: ['id', 'name', 'active', 'default'],
        where: { [Op.and]: [{ id }, { user_id: req.userId }] },
        include: {
          model: User,
          attributes: ['id', 'nome', 'email'],
        },
      })
      return res.status(200).json(bank)
    } catch (e) {
      e.errors.map((err) => err.message)
    }
  }
}

export default new BankingController()
