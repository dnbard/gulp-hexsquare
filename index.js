'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var gm = require('gm');

module.exports = function (options) {
    if (typeof options.size !== 'object') {
        throw new gutil.PluginError('gulp-hexsquare', '`size` required');
    }

    if (typeof options.size.width !== 'number'){
        throw new gutil.PluginError('gulp-hexsquare', '`size.width` must be a number');
    }

    if (typeof options.size.height !== 'number'){
        throw new gutil.PluginError('gulp-hexsquare', '`size.height` must be a number');
    }

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
            var gmFile = gm(file.contents, file.path),
                newSize = {
                    width: Math.round(options.size.width / 1.5),
                    height: Math.round(options.size.height / 1.5),
                    x: Math.round(options.size.width / 6),
                    y: Math.round(options.size.height / 6)
                };

            gmFile.crop(newSize.width, newSize.height, newSize.x, newSize.y);

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
