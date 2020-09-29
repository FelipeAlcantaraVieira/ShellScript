const assert = require('assert');
const { parse } = require('path');
// escreva a função findTheNeedle aqui
const findTheNeedle = (word, string) => {
  let position = 0;
  for (index in word){
    if (word[index] === string) return parseFloat(index);
  }
  return -1;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);