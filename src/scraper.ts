var getOg = require('open-graph-scraper');

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
}