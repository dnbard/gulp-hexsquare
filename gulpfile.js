var gulp = require('gulp'),
    hexsquare = require('./index.js');

gulp.task('example', function(){
    gulp.src('example/*')
        .pipe(hexsquare({
            size: {
                width: 72,
                height: 72
            },
            resize:{
                width: 32,
                height: 32
            }
        }))
        .pipe(gulp.dest('build'));
});
