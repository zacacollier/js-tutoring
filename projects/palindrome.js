/* jshint node: true, esversion: 6 */
'use strict';
const test = require('colored-tape');
const readline = require('readline');
const chalk = require('chalk');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const palindrome = (word) => {
  // Code goes here
};

const getPrompt = () => {
  rl.on('SIGINT', () => {
    console.log(chalk.cyan('Bye!'));
    return process.exit();
  });
  rl.question('Enter a word: (Hit Ctrl + c to quit) ', (word) => {
    if (word === 'test') {
      return runTests(palindrome(word));
   }
    if (palindrome(word)) {
      console.log("Yes, that's a palindrome!");
    } else {
      console.log("Nope, that's not a palindrome. Try again.");
    }
    getPrompt();
  });
};

getPrompt();

// Tests

const runTests = () => {
  test('palindrome', (t) => {
    t.ok(palindrome('civic'));
    t.ok(palindrome('rediviDer'));
    t.ok(palindrome('kayak'));
    t.notOk(palindrome('el baño'));
    t.end();
  });
};


module.exports = palindrome;
