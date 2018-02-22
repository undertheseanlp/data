var youtube = require('./youtube.js');

(async () => {
    await youtube("EKIGSAkCMB0", './videos/test.mp4');
    console.log("DONE!");
})();
