import Joi from 'joi'

const userSchemas = {
  POST: Joi.object().keys({
    nome: Joi.string().required().min(3).max(50),
    sobrenome: Joi.string().required().min(3).max(50),
    password: Joi.string().required().min(3),
    email: Joi.string().required().email(),
    ativo: Joi.boolean().required(),
  }),
  SHOW: Joi.object().keys({
    id: Joi.string().guid().required(),
  }),
}

export default userSchemas
