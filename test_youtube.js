var fs = require('fs');
var youtubedl = require('youtube-dl');

var youtube = (videoId, filepath) => {
    return new Promise(fulfill => {
        var url = 'http://www.youtube.com/watch?v=' + videoId;
        var video = youtubedl(url,
            ['--format=18'],
            {cwd: __dirname});

        video.pipe(fs.createWriteStream(filepath));

        video.on('end', function () {
            fulfill();
        })
    });
};

(async () => {
    await youtube("90AiXO1pAiA", './videos/test.mp4');
    console.log("DONE!");
})();

