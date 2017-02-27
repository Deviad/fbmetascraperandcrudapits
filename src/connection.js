"use strict";
exports.__esModule = true;
/**
 * Created by spotted on 26/02/17.
 */
var Rx = require("rxjs/Rx");
var scraper_1 = require("./scraper");
var Connection = (function () {
    function Connection(req, res) {
        var url = req.param('url');
        var scrapedData = scraper_1.Scraper.scrape(url);
        var source = Rx.Observable.from(scrapedData);
        var published = source.publish();
        //useful for polymorphic kind of stuff: add a 'SourceA' argument
        // published.subscribe(createObserver('SourceA'));
        published.subscribe(this.createObserver(res));
        //disposable object that I can use later own, more for my own convenience, to remember
        //that this is the connection. Otherwise I could just simply use published.unsubscribe();
        // var connection = published.connect();
        this.connection = published.connect();
        //if you need polymorphism place a tag parameter that basically receives SourceA
        // or whatever tag you decide
        // function createObserver(tag){
    }
    Connection.prototype.createObserver = function (res) {
        return {
            next: function (response) { res.json(response); },
            error: function (err) { console.log('Error: %s', err); },
            complete: function () { console.log('Completed'); }
        };
    };
    return Connection;
}());
exports.Connection = Connection;
