/**
 * Created by spotted on 26/02/17.
 */
import { Observable } from "rxjs/Observable";
// import { Observer } from 'rxjs/Observer';
// import { Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import "rxjs/add/observable/from";
import "rxjs/add/operator/publish";
import "rxjs/add/observable/defer";
import { Scraper } from './scraper';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';
import * as express from 'express';
import {ConnectableObservable} from "rxjs";

class Connection {


    private published: Observable<ConnectableObservable<any>>;
    constructor() {
    }

     getConnection<T>(url:string, res: express.Response)  {
        let resp = res;

        const  scrapedData  = Scraper.scrape(url);


        //(2) same problem as (1) I cannot just use Observervable.from
         //prolly I will have to import {} and use FromObservable.create() as per from.d.ts

        let source = PromiseObservable.create(scrapedData);

        this.published = source.publish();

         //(1)
        //I had to do this because Observer.create does not work
        //look at the same app made with ES5 at https://github.com/Deviad/fbmetascraperandcrudapi
        //in vanilla js it just works

        let subscriber = Subscriber.create(
            response => response,
            err => {console.log('Error: %s', err)},
            () => {console.log('Completed')}
     );
        return this.published.subscribe(subscriber);
    }

}


export  { Connection };