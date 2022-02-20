import { Router } from 'express'
import validateRequest from '../middlewares/validateRequest'
import bankingSchema from '../schemas/bankingSchema'
import validateToken from '../middlewares/validateToken'
import bankingController from '../controllers/bankingController'
const router = new Router()

router.post(
  '/',
  validateRequest(bankingSchema.POST, 'body'),
  validateToken,
  bankingController.store
)

router.get('/', validateToken, bankingController.show)
router.get(
  '/:id',
  validateRequest(bankingSchema.GET, 'params'),
  validateToken,
  bankingController.index
)
export default router
