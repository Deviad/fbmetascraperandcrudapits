const fsbx = require('fuse-box');
const FuseBox = fsbx.FuseBox;

let fuse = FuseBox.init({
    package: 'richlink-middleman-ts',
    homeDir: "src/",
    sourceMap: {
      bundleReference: "./sourcemaps.js.map",
      outFile: "./sourcemaps.js.map",
    },
    globals: {"richlink-middleman-ts": "*"},
    outFile: "./dist/app.js", 
    plugins:
        [   fsbx.TypeScriptHelpers(),
            fsbx.JSONPlugin()
        ]
});

fuse.bundle(">app.ts [src/**/*.ts]");
