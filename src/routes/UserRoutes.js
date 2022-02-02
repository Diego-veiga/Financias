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

router.get(
  '/:id',
  validateToken,
  validateRequest(userSchemas.SHOW, 'params'),
  userController.show
)

router.get('/', validateToken, userController.index)

router.put(
  '/:id',
  validateToken,
  validateRequest(userSchemas.SHOW, 'params'),
  userController.update
)

export default router
