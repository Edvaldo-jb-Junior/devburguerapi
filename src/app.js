const express = require( "express")
const routes = require('./routes')

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





module.exports = new App().app