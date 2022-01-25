import { Router } from 'express'
import userController from '../controllers/userController'
import userSchemas from '../schemas/userSchema'
import validateRequest from '../middlewares/validateRequest'
import validateToken from '../middlewares/validateToken'

const router = new Router()

router.post(
  '/',
  validateToken,
  validateRequest(userSchemas.POST, 'body'),
  userController.store
)

export default router
