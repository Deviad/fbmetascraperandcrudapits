import * as path from 'path';
import * as http from 'http'
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import {Connection} from './connection';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/publish';


class App {

    public express: express.Application;
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.createServer();
    }

    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }


    // private routes(): void {
    //     /* This is just to get up and running, and to make sure what we've got is
    //      * working so far. This function will change when we start to add more
    //      * API endpoints */
    //     let router = express.Router();
    //     // placeholder route handler
    //     router.get('/', (req, res, next) => {
    //         res.json({
    //             message: 'Hello World!'
    //         });
    //     });
    //     this.express.use('/', router);
    // }

    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler
        router.get('/api', (req, res, next) => {

            let url = req.param('url');

            let connection = new Connection;
            connection.getConnection(url,res);

        });
        this.express.use('/', router);
    }



    private createServer() {
        http.createServer(this.express).listen(5100, ()=>{
            console.log("Example app listening on port 5100!");
    })}

    }

export default new App().express;
