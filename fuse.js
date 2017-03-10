const fb = require("fuse-box");
const FuseBox = fb.FuseBox;
const express = require('Express');
const bodyParser = require('body-parser');
const statuses = require('http-errors');
const fuse = FuseBox.init({
    homeDir: "./src",
    outFile: "./dist/app.js",
    sourceMap: {
        bundleReference: "./dist/sourcemaps.js.map",
        outFile: "./dist/sourcemaps.js.map",
    },
    log: true,
    debug: true,
    cache: false,
    tsConfig: "tsconfig.json",

});

fuse.devServer(">app.ts", {port: 5000});

