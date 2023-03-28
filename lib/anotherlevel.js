/*
 * write a nodejs function that is on another level and takes a filename and writes data to the file with two variables in the function one for the filename and the second for the data in await / async as a module
 */
const fs = require('fs').promises;

async function writeToFile(fileName, data) {
    try {
        await fs.writeFile(fileName, data);
        console.log(`Successfully written to ${fileName}`);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    writeToFile
}
