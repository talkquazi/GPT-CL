 /*
  * GPT Input: Create a nodejs script that will loop over a yaml file and folder structure like with the createStructure function from superstructure.js except when it loops over each file and folder instead of creating the file or folder it will instead check if it is a file. if it is a file then check if the extension is .gpt and if the extension is .gpt call a function named layman with that file name being passed to the layman function
  *
  */
const fs = require('fs');
const yaml = require('js-yaml');

// Load YAML file
async function structureLoader(fileStructureYAML, callback) {
    try {
        const fileContent = fs.readFileSync(fileStructureYAML, 'utf8');
        const files = yaml.load(fileContent);
        // use map to create an array of promises
        const promises = files.map(async file => {
            if (file.toString().endsWith('.gpt')) {
                await callback(file);
            }
        });
        // wait for all the promises to resolve
        await Promise.all(promises);
    } catch (e) {
        console.log('Super Structure Loading error:', e);
    }
}

module.exports = {
    structureLoader
}
