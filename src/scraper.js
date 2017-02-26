"use strict";
exports.__esModule = true;
var app_js_1 = require("open-graph-scraper/app.js");
var Scraper = (function () {
    function Scraper() {
    }
    Scraper.scrape = function (input_url) {
        var myOg = new app_js_1.getOg();
        var myOgs = app_js_1.getOg({ the_url: input_url }, function (params) { return params; });
        return myOgs;
    };
    return Scraper;
}());
exports.Scraper = Scraper;
