import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import './src/database'
import userRouter from './src/routes/UserRoutes'

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
  }
}

export default new App().app
