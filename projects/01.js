/* jshint node: true, esversion: 6 */
'use strict';
const test = require('tape');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const oppish = (word) => {

};

const getPrompt = () => {
  rl.question('Enter a word: (Hit Ctrl+c to quit)', (word) => {
    console.log(oppish(word));
  });
  rl.on('SIGINT', () => {
    console.log('Boppye!');
  });
};

// hello should equal 'h-opp-ello'
// are should equal 'ar-opp-e'
// and should equal 'and-opp'
// syllables are demarcated by consecutive consonants
