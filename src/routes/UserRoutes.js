import { Router } from 'express'
import userController from '../controllers/userController'
import userSchemas from '../schemas/userSchema'
import validateRequest from '../middlewares/validateRequest'

const router = new Router()

router.post(
  '/',
  validateRequest(userSchemas.POST, 'body'),
  userController.store
)

export default router
