'use strict';

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

let paths = {

    styles: {
        srcFolder: './assets/css',
        srcFiles: './assets/css/**/*.css',
        destFolder: './dist/css'
    }
};

gulp.task('clean', () => {
    console.log("Generate CSS files " + (new Date()).toString());

    gulp.src(paths.styles.srcFiles)
        .pipe(cleanCSS({ debug: true }, (details) => {
            console.log(details.name + ': ' + details.stats.originalSize + '(original size)');
            console.log(details.name + ': ' + details.stats.minifiedSize + '(minified size)');
        }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest(paths.styles.destFolder))

        // Error handler
        .on('error', function (err) {
            console.error(err);
        })
        .pipe(gulp.dest(paths.styles.destFolder))
});


// Default task
gulp.task('default', () => {
    gulp.watch(paths.styles.srcFiles, ['clean'])

        // Also when there is a change, display what file was changed, only showing the path after the 'css folder'
        .on('change', function (evt) {
            console.log('[watcher] File ' + evt.path.replace(/.*(?=sass)/, '') + ' was ' + evt.type + ', compiling...');
        });
});