import { Router } from 'express'
import tokenController from '../controllers/tokenControllers'
import authSchema from '../schemas/authSchema'
import validateRequest from '../middlewares/validateRequest'

const router = new Router()

router.post('/', validateRequest(authSchema.POST, 'body'), tokenController.auth)

export default router
