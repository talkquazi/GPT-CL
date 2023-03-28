/*
 *
 * GPT Input: write a nodejs script that would load this yaml file and folder structure then writes out the file and folder structure to a new folder named build:
 *
 *	- index.gpt
 *	- music:
 *		- something.mp3
 *	- test.gpt
 *	- anotherfolder:
 *		- anotherfolder:
 *			- file.js
 */
const fs = require('fs');
const yaml = require('js-yaml');
const {promisify} = require('util');
const pMap = require('p-map');

async function createStructure(files, buildPath) {
    if (!fs.existsSync(buildPath)) {
        await fs.promises.mkdir(buildPath);
    }
    await pMap(files, async (file) => {
        if (typeof file === 'string') {
            await fs.promises.writeFile(buildPath + '/' + file, "");
        } else {
            const key = Object.keys(file)[0];
            await createStructure(file[key], buildPath + '/' + key);
        }
    }, {concurrency: 1});
}

async function structureLoader(fileStructureYAML) {
    try {
        const fileContent = await fs.promises.readFile(fileStructureYAML, 'utf8');
        const files = yaml.load(fileContent);
        console.log('Number of files found to build:', files.length);
        return await createStructure(files, "build");
    } catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = {
    structureLoader,
    createStructure
}
