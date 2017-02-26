var express = require('express');
var Connection = require('./connection');
var app = express();
app.get('/api/richlinks', function (params) {
    (function () {
        return new Connection(params);
    })();
});
app.listen(5100, function () {
    console.log('Example app listening on port 5100!');
});
module.exports = app;
