import { Router } from 'express'
import tokenController from '../controllers/tokenControllers'

const router = new Router()

router.post('/', tokenController.auth)

export default router
