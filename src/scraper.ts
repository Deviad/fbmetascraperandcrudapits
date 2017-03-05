const ogs = require('open-graph-scraper');


export class Scraper {


    public static scrape(url) {

      return  ogs({url: url}, // Settings object first
            function (er, res) {

                 if (er == true) {
                    console.log(er);
                 }
                 else  {
                     return res;
                 }


            }  // Callback)
        );

    }


}
