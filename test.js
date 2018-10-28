const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther');

describe('Count sum of other elements in array', () => {
  it('1', () => {
    const answers = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(answers, [8, 7, 6, 9]);
  });
describe('Count sum of other elements in array', () => {
    it('2', () => {
      const answers = sumOfOther([8, 5, 13, 27, 35, 9]);
      assert.deepEqual(answers, [89, 92, 84, 70, 62, 88]);
    });
});
 });