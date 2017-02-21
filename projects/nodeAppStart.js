'use strict';
const test = require('colored-tape');
const readline = require('readline');
const chalk = require('chalk');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const printInput = (input, otherInput) => {
  console.log(chalk.green(`...and then you can do something with your inputs by passing them into functions!\n`))
  console.log(chalk.green(`Here, I'm just printing out the inputs: ${input}, ${otherInput}`))
}

const getPrompt = () => {
  rl.on('SIGINT', () => {
    console.log(chalk.cyan('Bye!'));
    return process.exit();
  });
  rl.question("Here's a prompt that will pop up when you run the App: ", (input) => {
    rl.question("You can nest 'readline' calls inside each other to grab more than one input: ", (otherInput) => {
      printInput(input, otherInput);
      console.log('Then, the loop will run again when I call getPrompt() on the next line.')
      getPrompt();
    });
  });
}

getPrompt();
