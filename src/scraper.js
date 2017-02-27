"use strict";
exports.__esModule = true;
var getOg = require('open-graph-scraper');
var Scraper = (function () {
    function Scraper() {
    }
    Scraper.scrape = function (input_url) {
        var myOg = new getOg();
        var myOgs = getOg({ the_url: input_url }, function (params) { return params; });
        return myOgs;
    };
    return Scraper;
}());
exports.Scraper = Scraper;
