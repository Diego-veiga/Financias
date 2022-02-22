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

      if (bank) {
        return res.status(200).json(bank)
      } else {
        return res.status(400).json({ message: 'Nenhuma conta encontrada ' })
      }
    } catch (e) {
      return res.status(500).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params

      if (Object.keys(req.body).length === 0) {
        return res
          .status(400)
          .json({ message: 'Por favor envie as informações para atualizar' })
      }
      const bank = await bankingModel.findOne({
        where: { [Op.and]: [{ id }, { user_id: req.userId }] },
      })
      if (!bank) {
        return res.status(400).json({ message: 'Nenhuma conta encontrada ' })
      }
      const updatedBank = await bank.update(req.body)
      return res.status(200).json(updatedBank)
    } catch (e) {
      return res.status(500).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params
      const bankingDeleted = await bankingModel.findOne({
        where: {
          [Op.and]: [{ id }, { user_id: req.userId }, { default: false }],
        },
      })
      if (!bankingDeleted) {
        return res.status(400).json({ message: 'Banco não encontrado' })
      }
      bankingDeleted.active = false
      await bankingDeleted.save()
      return res.status(200).json({ message: 'Banco excluído com sucesso' })
    } catch (e) {
      return res.status(500).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }
}

export default new BankingController()
