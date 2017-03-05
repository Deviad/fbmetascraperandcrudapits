import * as express from "express";
import app from "../app";
import IRouterHandler = express.IRouterHandler;
import {ApiController} from "../controllers/api.controller";
import {Subscriber} from "rxjs";
import Application = express.Application;
import IRoute = express.IRoute;
class ApiRoutes {

    constructor() {

    }

    bootRoutes<T>(app: Application): any {

      const apiControllers = new ApiController(app);

      const SCRAPER: IRoute = apiControllers.ApiOgScraperAction('/api/ogscraper');

      const Routes = [
            apiControllers.ApiOgScraperAction('/api/ogscraper').subscribe( item => item),

      ];


      return Routes;


    }

}

export { ApiRoutes };

