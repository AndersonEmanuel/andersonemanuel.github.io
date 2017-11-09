const del = require('del');
const gulp = require('gulp');
const less = require('gulp-less');

let dir = {
    less: './assets/less',
    build: './build'
};

dir.build_css = `${dir.build}/css`;
dir.build_js = `${dir.build}/js`;

gulp.task('clean', function () {
    del.sync([dir.build]);
});

gulp.task('watch', function () {
    gulp.watch([`${dir.less}/**/*.less`], ['less']);
});

gulp.task('less', function () {
    gulp.src(`${dir.less}/style.less`).pipe(less()).pipe(gulp.dest(dir.build_css));
});

gulp.task('default', ['clean', 'watch', 'less']);