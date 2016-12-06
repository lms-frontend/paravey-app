var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        // port: 8081,
        notify: false
        //  ghostMode: {
        //     links: false
        // }
    });
});

gulp.task('sass', function () {
    return gulp.src('app/assets/css/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/assets/css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
 //
 // gulp.task('sync', function () {
 //     return gulp.src('app/index.html')
 //         .pipe(browserSync.reload({stream:true}))
 // });


gulp.task('watch', function () {
    gulp.watch(['app/assets/css/**/*.*','app/*.html'], ['sass']);
    // gulp.watch(['app/views/*.html', 'app/assets/js/*.js'], ['sync']);
    // //js files
    // gulp.watch('app/**/*.js');
    // svgs
    // gulp.watch('assets/svg/sprite.svg', ['browser-sync']);
});

/**
 * Default task, running just `gulp` will compile the sass,
*/
gulp.task('default', ['browser-sync', 'watch']);
