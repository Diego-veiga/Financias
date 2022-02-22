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

router.put(
  '/:id',
  validateRequest(bankingSchema.GET, 'params'),
  validateRequest(bankingSchema.PUT, 'body'),
  validateToken,
  bankingController.update
)

router.post(
  '/:id',
  validateRequest(bankingSchema.GET, 'params'),
  validateToken,
  bankingController.delete
)
export default router
