'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var gm = require('gm');

module.exports = function (options) {
//    if (!options.foo) {
//        throw new gutil.PluginError('gulp-hexsquare', '`foo` required');
//    }

    return through.obj(function (file, enc, cb) {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-hexsquare', 'Streaming not supported'));
            return;
        }

        try {
            var gmFile = gm(file.contents, file.path);

            gmFile.crop(parseInt(options.size.width / 1.5), parseInt(options.size.height / 1.5), parseInt(options.size.width / 6), parseInt(options.size.height / 6));

            if (options.resize){
                gmFile.resize(options.resize.width, options.resize.height);
            }

            gmFile.toBuffer(function(err, buffer){
                file.contents = buffer;
                cb(null, file);
            });

        } catch (err) {
            this.emit('error', new gutil.PluginError('gulp-hexsquare', err));
        }
    });
};
