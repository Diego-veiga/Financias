import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import './src/database'
import userRouter from './src/routes/userRoutes'
import tokenRouter from './src/routes/tokenRouter'

class App {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }
  routes() {
    this.app.use('/user/', userRouter)
    this.app.use('/token/', tokenRouter)
  }
}

export default new App().app
