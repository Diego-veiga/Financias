import Sequelize, { Model } from 'sequelize'
import { v4 as uuidv4 } from 'uuid'
export default class Banking extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'O campo name precisa ter entre 3 e  5 caracteres',
            },
          },
        },
        default: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        active: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
      },
      {
        sequelize,
        tableName: 'banking',
      }
    )
    this.beforeCreate(async (banking) => {
      banking.id = await uuidv4()
    })

    return this
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' })
  }
}
