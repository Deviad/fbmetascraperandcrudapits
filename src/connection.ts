/**
 * Created by spotted on 26/02/17.
 */
import {Observable} from "rxjs/Observable";
import { Observer } from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
import {Subscriber} from 'rxjs/Subscriber';
import "rxjs/add/observable/from";
import "rxjs/add/operator/publish";
import "rxjs/add/observable/defer";
import {Scraper} from "./scraper";


class Connection {


    private published: Observable<any>;
    constructor() {
    }

     getConnection<T>(url:string,res)  {
        let resp = res;
        let scrapedData = Scraper.scrape(url);


        //(2) same problem as (1) I cannot just use Observervable.from
         //prolly I will have to import {FromObservable} and use FromObservable.create() as per from.d.ts

        let source:  Observable<any> = Observable.from(scrapedData);

        this.published = source.publish();

         //(1)
        //I had to do this because Observer.create does not work
        //look at the same app made with ES5 at https://github.com/Deviad/fbmetascraperandcrudapi
        //in vanilla js it just works

        let subscriber = Subscriber.create(
            response => resp.json(response),
            err => {console.log('Error: %s', err)},
            () => {console.log('Completed')}
     );
         this.published.subscribe(subscriber);
    }

}


export {Connection};