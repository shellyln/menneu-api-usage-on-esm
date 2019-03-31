
import './extension';
import * as menneu from 'menneu/modules';
import fs   from 'fs';
import util from 'util';
import path from 'path';
import url  from 'url';

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


const isWebpack = typeof __webpack_require__ === 'function';
let thisFileName = '';
let thisDirName = '';
if (isWebpack) {
    thisFileName = __filename;
    thisDirName = __dirname;
} else {
    // webpack reports the error:
    //    Support for the experimental syntax 'importMeta' isn't currently enabled
    //    -> use '@open-wc/webpack-import-meta-loader'
    // parcel reports the error:
    //    Support for the experimental syntax 'importMeta' isn't currently enabled
    thisFileName = url.fileURLToPath(import.meta.url);
    thisDirName = path.dirname(thisFileName);
}


(async () => {
    fs.mkdirSync('./debug', { recursive: true });

    try {
        const buf = await menneu.render(`# Hello, ${
                thisFileName} ${
                thisDirName}!`, {}, {
            rawInput: true,
            inputFormat: 'md',
            dataFormat: 'object',
            outputFormat: 'html',
        });
        await writeFileAsync('./debug/0.html', buf);
    } catch (e) {
        console.log(e);
    }

    try {
        const html = (await readFileAsync('./examples/1.md')).toString('utf8');
        const buf = await menneu.render(html, {}, {
            rawInput: true,
            inputFormat: 'md',
            dataFormat: 'object',
            outputFormat: 'html',
        });
        await writeFileAsync('./debug/1.html', buf);
    } catch (e) {
        console.log(e);
    }

    try {
        const html = (await readFileAsync('./examples/1.md')).toString('utf8');
        const buf = await menneu.render(html, {}, {
            rawInput: true,
            inputFormat: 'md',
            dataFormat: 'object',
            outputFormat: 'pdf',
        });
        await writeFileAsync('./debug/1.pdf', buf);
    } catch (e) {
        console.log(e);
    }

    try {
        const html = (await readFileAsync('./examples/1.md')).toString('utf8');
        const buf = await menneu.render(html, {}, {
            rawInput: true,
            inputFormat: 'md',
            dataFormat: 'object',
            outputFormat: 'png',
        });
        await writeFileAsync('./debug/1.png', buf);
    } catch (e) {
        console.log(e);
    }

    try {
        const html = (await readFileAsync('./examples/2.md')).toString('utf8');
        const buf = await menneu.render(html, {}, {
            inputFormat: 'md',
            dataFormat: 'object',
            outputFormat: 'html',
        });
        await writeFileAsync('./debug/2.html', buf);
    } catch (e) {
        console.log(e);
    }

    try {
        const html = (await readFileAsync('./examples/2.md')).toString('utf8');
        const buf = await menneu.render(html, {}, {
            inputFormat: 'md',
            dataFormat: 'object',
            outputFormat: 'pdf',
        });
        await writeFileAsync('./debug/2.pdf', buf);
    } catch (e) {
        console.log(e);
    }

    try {
        const html = (await readFileAsync('./examples/2.md')).toString('utf8');
        const buf = await menneu.render(html, {}, {
            inputFormat: 'md',
            dataFormat: 'object',
            outputFormat: 'png',
        });
        await writeFileAsync('./debug/2.png', buf);
    } catch (e) {
        console.log(e);
    }
})();
