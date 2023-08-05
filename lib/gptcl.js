const fs = require('fs');
const path = require('path');
const async = require('async');
const config = require('../config/config.js');

// Open API Key
if (config.OPEN_API_KEY && config.OPEN_API_KEY !== '') {
    process.env.OPENAI_API_KEY = config.OPEN_API_KEY || process.env.OPENAI_API_KEY;
}

// Include GPT-CL Libs
const superStructure = require('./superstructure.js');
const psudoSelector = require('./psudoselector.js');
const laymanscode = require('./laymanscode.js');
const anotherlevel = require('./anotherlevel.js');
const reversetower = require('./reversetower.js');

global.tokensUsed = 0;

const gptCompletionQueue = async.queue(async (fileName, callback) => {
    console.log(`------------------------------------------------------------`);
    console.log(`The file ${fileName} has started building..`);

    // Laymans Code Conversion
    const gptLCFile = fs.readFileSync('./'+ fileName, 'utf8');
    const neuralResult = await laymanscode.createCompletion(gptLCFile.toString('utf-8'));

    console.log('neural result:', neuralResult);

    await anotherlevel.writeToFile('./build/'+ fileName, neuralResult);
    console.log('Code Written To: ', fileName);

    // Reverse The Tower of Babel
    const mimeInfo = await reversetower.getMimeType('./build/'+ fileName);

    // Fix File Extension In Build
    console.log('Mime Info Extension:', mimeInfo.ext);
    const renamedOk = await reversetower.renameFileExtension('./build/'+ fileName, '.'+ mimeInfo.ext);

    console.log('Mime File Rename:', renamedOk);
    console.log('Total Tokens Used:', global.tokensUsed);
    callback();
}, 1);

async function gptcompletion(fileName) {
    gptCompletionQueue.push(fileName);
}

async function gptcl() {

    // 0 Tokens Used
    global.tokensUsed = 0;

    // Ensure Files And Folders Exist
    await superStructure.structureLoader('./SuperStructure.yaml');

    // Loop .GPT Files For Code Completion
    psudoSelector.structureLoader('./SuperStructure.yaml', async function (fileName) {
        return await gptcompletion(fileName);
    });
}

module.exports = {
    gptCompletionQueue,
    gptcompletion,
    gptcl
}
