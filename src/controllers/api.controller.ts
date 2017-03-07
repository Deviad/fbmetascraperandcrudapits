import * as express from 'express';

import { Application,Request, Response } from 'express';
import {FbDataService} from "../services/fb.data.service";
import {Subscriber, Observable} from "rxjs";
import IRouterHandler = express.IRouterHandler;
import IRoute = express.IRoute;

class ApiController {

    constructor(private app: Application) {
    }


    ApiOgScraperAction (endpoint: string): IRoute {

        return  this.app.route(endpoint).get(
            (req: Request, res: Response)=>{
                let data = new FbDataService();
                let url = req.param('url');
              data.getData(url).subscribe(
                    item =>  res.send(item)
                );
            }
        );
    }

}

export { ApiController };
