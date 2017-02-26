var express = require('express');
var Connection = require('./connection');
var app = express();
app.get('/api/richlinks', function (req, res) {
    (function () {
        return new Connection(req, res);
    })();
});
app.listen(5100, function () {
    console.log('Example app listening on port 5100!');
});
module.exports = app;
