import express from 'express'
import routes from './routes.js'
import './database'

class App{
    constructor(){
        this.app = express()

        this.middlewares();

        this.routes(0)
    }

    middlewares(){
         this.app.use(express.json())
    }

    routes(){
        this.app.use(routes)
    }
}


export default new App().app