/* jshint node: true, esversion: 6 */
'use strict';
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const chalk = require('chalk');

const getPrompt = () => {
  rl.question('Enter some text:', (start) => {
    console.log(chalk.red(`The type of your text is ${typeof start}`))
  })
}

getPrompt()
