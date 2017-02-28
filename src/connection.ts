/**
 * Created by spotted on 26/02/17.
 */
import {Observable} from "rxjs/Observable";
import { Observer } from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
import "rxjs/add/observable/from";
import "rxjs/add/operator/publish";
import "rxjs/add/observable/defer";
import {Scraper} from "./scraper";


class Connection {


    private published: Observable<any>;

    constructor() {
    }

    createObserver<T>(url:string): Subscription {


        let scrapedData = Scraper.scrape(url);

        let source:  Observable<any> = Observable.from(scrapedData);

        this.published = source.publish();

        return this.published.subscribe(Observable.create(

            ));

    }

    getConnection(url:string): any {
        return Observable.defer(this.published.subscribe(
             (observer) => {
                observer.next(res => res.json(res)),
                    observer.error(err => {console.log('Error: %s', err)}),
                    observer.complete(() => {console.log('Completed')})
            }
        ));
    }

}


export {Connection};