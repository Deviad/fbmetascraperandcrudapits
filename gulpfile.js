var ts = require("gulp-typescript");
var gulp = require("gulp");
//var concat = require('gulp-concat');

var tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript", function() {
    return tsProject.src()
        .pipe(ts(tsProject))
//        .pipe(concat('app.js'))
        .pipe(gulp.dest("./dist"));
});

gulp.task("watch", function() {
    gulp.watch('src/**/*.ts', ["typescript"]);
});

gulp.task("default", ["watch"]);
