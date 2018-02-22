var fs = require('fs');
var youtubedl = require('youtube-dl');

var youtube = (videoId, filepath, option) => {
    return new Promise(fulfill => {
        var url = 'http://www.youtube.com/watch?v=' + videoId;
        var video = youtubedl(url, option, {cwd: __dirname});

        video.pipe(fs.createWriteStream(filepath));

        video.on('end', function () {
            fulfill();
        })
    });
};

module.exports = youtube;
