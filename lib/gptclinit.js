/*
 * Write a nodejs module that asks a series of questions on the command waiting for the users response and then storing that response in variables to use later in the script the questions are as follows:

Project Title?:

Output Language? (Defaults To NodeJS):

Main Script? (Defaults To index.gpt)

With those three questions using fs write a file named SuperStructure.yaml in the current working directory. The contents of the SuperStructure.yaml file should be the Main Script defined by the user input or defaulting to index.gpt. Once the file is written the script should say "GPT-CL Project Initilized"
*/
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const defaultGPTCLFile = function(projectTitle, outputLanguage, mainScript) {

  const outTemplate = `# 
# GPT-Lamens
# File: ${mainScript}
# Title: Hello World Example
# Input Lang: GPT-CL Psudocode (Layman's Code)
# Output Lang: ${outputLanguage}
# Test Mod: jest
# Code Comments: basic`;

  return outTemplate;
}

const init = function() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let projectTitle, outputLanguage, mainScript;

  rl.question('Project Title?: ', (answer) => {
    projectTitle = answer || 'GPT-CL Project';
    rl.question('Output Language? (Defaults To NodeJS): ', (answer) => {
      outputLanguage = answer || 'NodeJS';
      rl.question('Main Script? (Defaults To index.gpt) ', (answer) => {
        if (answer) mainScript = ' - ' + answer
        if (!answer) mainScript = ' - index.gpt';
        if (path.extname(mainScript.replace(' - ', '')) !== '.gpt') {
          console.log('Main Script must be of the file type .gpt. Exiting.');
          process.exit(1);
        }
        fs.writeFileSync('SuperStructure.yaml', mainScript);
        fs.writeFileSync(mainScript.replace(' - ', ''), defaultGPTCLFile(projectTitle, outputLanguage, mainScript.replace(' - ', '')));
        console.log("GPT-CL Project Initialized");
        rl.close();
      });
    });
  });
}

module.exports = {
  init
}