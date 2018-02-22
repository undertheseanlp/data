var ffmpeg = require('fluent-ffmpeg');
/**
 *    input - string, path of input file
 *    output - string, path of output file
 *    callback - function, node-style callback fn (error, result)
 */
function convert(input, output, callback) {
    ffmpeg(input)
        .output(output)
        .on('end', function() {
            console.log('conversion ended');
            callback(null);
        }).on('error', function(err){
            console.log(err);
            console.log('error: ', err.code, err.msg);
            callback(err);
        }).run();
}

convert('./videos/test.mp4', './output.mp3', function(err){
   if(!err) {
       console.log('conversion complete');
   }
});