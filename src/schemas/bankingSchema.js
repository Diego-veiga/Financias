import Joi from 'joi'

const bankingSchema = {
  POST: Joi.object().keys({
    name: Joi.string().min(3).max(50).required(),
    active: Joi.boolean().optional(),
  }),
  GET: Joi.object().keys({
    id: Joi.string().uuid().required(),
  }),
  PUT: Joi.object().keys({
    name: Joi.string().min(3).max(50).optional(),
    active: Joi.boolean().optional(),
  }),
}

export default bankingSchema
