import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'O campo nome precisa ter entre 3 e  5 caracteres',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'O campo sobrenome precisa ter entre 3 e  5 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email ja cadastrado',
          },
          validate: {
            isEmail: {
              msg: 'Email ja cadastrado',
            },
          },
        },
        password_hash: Sequelize.STRING,
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'O campo password precisa ter entre 3 e  5 caracteres',
            },
          },
        },
        ativo: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
      },
      {
        sequelize,
      }
    )
    this.beforeCreate(async (user) => {
      user.id = await uuidv4()
    })
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8)
      }
    })
    return this
  }
  async passwordIsValid(password) {
    return bcrypt.compare(password, this.password_hash)
  }
  static associate(models) {
    this.hasMany(models.Banking, { foreignKey: ' user_id' })
  }
}
