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
    // just testin

    return true;
   
};

const getPrompt = () => {
  rl.on('SIGINT', () => {
    console.log(chalk.cyan('Bye!'));
    return process.exit();
  });
  rl.question('PALINDROME VALIDATOR\n(Hit Ctrl + c to quit or type "test" to test your code)\nEnter a word: ', (word) => {
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
  test('Palindrome tests:', (t) => {
    t.ok(palindrome('civic'));
    t.ok(palindrome('rediviDer'));
    t.ok(palindrome('kayak'));
    t.equal(palindrome('el baño'), false);
    t.end();
    process.exit();
  });
};

runTests();

module.exports = palindrome;
