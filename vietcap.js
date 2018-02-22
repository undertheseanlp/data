const puppeteer = require('puppeteer');
const fs = require('fs');

/**
 * @return {!Promise<?Puppeteer.Frame>}
 */
async function getFrame(element) {
    const nodeInfo = await element._client.send('DOM.describeNode', {
        objectId: element._remoteObject.objectId
    }).catch(error => void debugError(error));
    if (typeof nodeInfo.node.frameId === 'string') {
        for (const frame of element._page.frames()) {
            if (nodeInfo.node.frameId === frame._id) {
                return frame;
            }
        }
        return null;
    } else {
        return null;
    }
}
var videos = [
    "59a235a46726962788332328"
];

(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    page.setViewport({width: 600, height: 800});
    var id = '59a235a46726962788332328';
    var url = 'http://quochoi.vietcap.org/video/' + id;
    var transcriptFile = './transcripts/' + id + '.json';

    await page.goto(url);
    await page.addScriptTag({
        path: "./mouse_helper.js"
    });

    await page.waitFor(3000);
    console.log("START");

    // const frameElement = await page.$('#player');
    // const frame = await getFrame(frameElement);

    // console.log("x2 speech");
    // await page.mouse.click(440, 390, {delay: 0});
    // await page.mouse.click(506, 304, {delay: 0});
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');
    // await page.mouse.click(440, 390, {delay: 0});
    //
    // console.log("Capturing...");
    // await page.mouse.click(42, 390, {delay: 0});
    // var data = [];
    // var i = 0;
    // var lastTime = "";
    // var loopTime = 0;
    // while (loopTime < 2) {
    //     const text = await page.evaluate(
    //         () => document.querySelector('.post-title').textContent.trim()
    //     );
    //     const time = await frame.evaluate(
    //         () => document.querySelector('.ytp-time-current').textContent
    //     );
    //     console.log(time, ":", text, loopTime);
    //     if(time == lastTime){
    //         loopTime += 1
    //     } else {
    //         loopTime = 0;
    //         lastTime = time;
    //     }
    //     data.push({
    //         "text": text,
    //         "time": time
    //     });
    //     await page.waitFor(200);
    // }
    // fs.writeFileSync(transcriptFile, JSON.stringify(data));
    await browser.close();
})();