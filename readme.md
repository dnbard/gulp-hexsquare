# gulp-hexsquare [![Build Status](https://travis-ci.org/dnbard/gulp-hexsquare.svg?branch=master)](https://travis-ci.org/dnbard/gulp-hexsquare)

> My super-duper gulp plugin


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
		.pipe(hexsquare())
		.pipe(gulp.dest('dist'));
});
```


## API

### hexsquare(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Alex Bardanov](https://github.com/dnbard)
