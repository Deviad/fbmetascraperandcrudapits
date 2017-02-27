/**
 * Created by spotted on 26/02/17.
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/publish';
import {Scraper} from "./scraper";



class Connection {

     connection: any;
     scrapedData: any;
     source: any;
     published: any;
     url: any;
     req: any;
     res: any;
    constructor(req:any, res:any) {
        this.url = req.param('url');
        this.res = res;
        this.req = req;
        this.scrapedData = Scraper.scrape(this.url);

        this.source = Observable.from(this.scrapedData);

        this.published = this.source.publish();

        //useful for polymorphic kind of stuff: add a 'SourceA' argument

        // published.subscribe(createObserver('SourceA'));


        //disposable object that I can use later own, more for my own convenience, to remember
        //that this is the connection. Otherwise I could just simply use published.unsubscribe();

        // var connection = published.connect();


        //if you need polymorphism place a tag parameter that basically receives SourceA
        // or whatever tag you decide

        // function createObserver(tag){

    }

    createObserver(res: any) {

        return {
            next: function (response:any ) { res.json(response); },
            error: function (err: any) { console.log('Error: %s', err); },
            complete: function () { console.log('Completed'); }
        };

    }

    getConnection () {
       return this.published.subscribe(this.createObserver(this.res));
    }

}

export {Connection};