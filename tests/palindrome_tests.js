/* jshint node: true, esversion: 6 */
'use strict';
const test = require('tape');
const palindrome = require('../projects/palindrome.js');

const runTest = () => {
   test('palindrome', (t) => {
     t.plan(3);
     t.ok(palindrome('civic'));
     t.ok(palindrome('rediviDer'));
     t.notOk(palindrome('el baño'));
 });
};

