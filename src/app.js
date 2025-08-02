/* eslint-disable no-undef */

import express from 'express'
import routes from './routes.js'
import { resolve } from 'path';
import './database'

class App{
    constructor(){
        this.app = express()

        this.middlewares();

        this.routes(0)
    }

    middlewares(){
         this.app.use(express.json());
         this.app.use('/product-file', express.static(resolve(__dirname, '..', 'uploads')));

    }

    routes(){
        this.app.use(routes)
    }
}


export default new App().app