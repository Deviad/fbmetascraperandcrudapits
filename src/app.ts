import * as express from 'express';
import { Application } from 'express';
import * as path from 'path';
import * as http from 'http';
const errorHandler = require('errorhandler');
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { DataService } from "./dataservice";
const root = require('app-root-path');
const cookieParser =  require('cookie-parser');
const CircularJSON = require('circular-json');
const routes  = require('./routes').routes;

const app: Application = express();



// view engine setup
// app.set('views', `${root}/server/views/`);
// app.set('view engine', 'ejs');
app.use(errorHandler({ dumpExceptions: true, showStack: true }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());

let data = new DataService();



app.route('/api').get(
    (req: express.Request, res: express.Response)=>{

        let url = req.param('url');
      data.getData(url).subscribe(
         item =>  res.send(item)
      );
    }
);

const PORT = 5000;

app.listen(PORT,  ()=>{
    console.log(`Example app listening on port ${PORT}`);});

export default app;