const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidTitle } = require('./1-function.cjs');

test('accepts a normal title', () => {
  assert.equal(isValidTitle('Learn Next.js'), true);
});

test('rejects an empty or non-string value', () => {
  assert.equal(isValidTitle('   '), false);
  assert.equal(isValidTitle(42), false);
});

test('accepts a title of exactly 80 characters', () => {
  assert.equal(isValidTitle('a'.repeat(80)), true);
});