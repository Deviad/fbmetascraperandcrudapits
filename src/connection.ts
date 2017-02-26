/**
 * Created by spotted on 26/02/17.
 */
import * as Rx from '@reactivex/rxjs';

import {Scraper} from "./scraper";



export class Connection {



    constructor(req:any, res:any) {
        let url = req.param('url');

        let scrapedData = Scraper.scrape(url);

        let source = Rx.Observable.fromPromise(scrapedData);

        let published = source.publish();

        //useful for polymorphic kind of stuff: add a 'SourceA' argument

        // published.subscribe(createObserver('SourceA'));

        published.subscribe(this.createObserver(res));

        //disposable object that I can use later own, more for my own convenience, to remember
        //that this is the connection. Otherwise I could just simply use published.unsubscribe();

        // var connection = published.connect();

        let connection = published.connect();
        return connection;
        //if you need polymorphism place a tag parameter that basically receives SourceA
        // or whatever tag you decide

        // function createObserver(tag){

    }
    createObserver(res: any) {

       return ({
            next: function (response:any ) { res.json(response); },
            error: function (err: any) { console.log('Error: %s', err); },
            complete: function () { console.log('Completed'); }
        });

}

}