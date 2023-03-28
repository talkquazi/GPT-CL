#!/usr/bin/env node
const fs = require('fs');
const gptcl = require('../lib/gptcl.js');
const gptclinit = require('../lib/gptclinit.js');

const args = process.argv.slice(2); // remove first two elements which are node and file path

// Help Command
if (args.length === 0 || args[0] === 'help') {
  console.log(`
    Usage: gptcl [command] [options]
    Available commands:
    - help: Shows this help message
    - init: Initilize a blank GPT-CL project in the current directory
    - build: Builds the GPT-CL project from the current directory
    - run (default): Runs a .gpt file infers the output language and executes the script in that output language
  `);

// Init Command
} else if (args[0] === 'init') {
  gptclinit.init();

// Build Command
} else if (args[0] === 'build') {
  const output = gptcl.gptcl();
  console.log(output);

// Run Command
} else {
  fs.readFile(args[1], (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // infer output language and execute script here
    }
  });
}
