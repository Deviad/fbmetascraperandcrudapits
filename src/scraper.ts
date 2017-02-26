import {getOg} from 'open-graph-scraper/app.js';

export class Scraper {

    constructor() {

    }



    static scrape (input_url:any ) {
        let myOg = new getOg();

        let myOgs = getOg(
            {the_url: input_url},
            (params:{er: any, res:any}) => {return params;}
        );



      return myOgs;
    }

       // static scrape(this_url:any):any {
       //
       //  export var pippo: any = new ogs();
       //
       //  pippo({ url: this_url }, (er:any, res:any)=>{
       //      return (er, res);
       //  })
       // }
}