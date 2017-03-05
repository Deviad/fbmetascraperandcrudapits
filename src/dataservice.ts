/**
 * Created by spotted on 26/02/17.
 */
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Scraper } from './scraper';


class DataService {


    constructor() {
    }

     getData<T>(url:string)  {

        const  scrapedData  = Scraper.scrape(url);


        //(2) same problem as (1) I cannot just use Observervable.from
         //prolly I will have to import {} and use FromObservable.create() as per from.d.ts

        let source = Observable.from(scrapedData);

        return source;


    }

}


export  { DataService };