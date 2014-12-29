# gulp-hexsquare

> Gulp plugin to conver hex textures to square

![example](https://raw.githubusercontent.com/dnbard/gulp-hexsquare/master/screens/example.png)


## Install

```sh
$ npm install --save-dev gulp-hexsquare
```


## Usage

```js
var gulp = require('gulp');
var hexsquare = require('gulp-hexsquare');

gulp.task('default', function () {
    return gulp.src('src/file.ext')
        .pipe(hexsquare({
            size: {
                width: 72,
                height: 72
            }
        }))
        .pipe(gulp.dest('dist'));
});
```


## API

### hexsquare(options)

#### options

##### resize

Type: `object`
Optional

Square texture will be resized to given dimentionals.

```js
gulp.task('default', function () {
    return gulp.src('src/file.ext')
        .pipe(hexsquare({
            size: {
                width: 72,
                height: 72
            }.
            resize: {
                width: 32,
                height: 32
            }
        }))
        .pipe(gulp.dest('dist'));
});
```


## License

MIT © [Alex Bardanov](https://github.com/dnbard)
