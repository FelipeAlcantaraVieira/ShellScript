const assert = require('assert');
// escreva a função addAllnumbers aqui
const addAllnumbers = number => {
  let sum = 0;
  for (index in number){
    sum += number[index];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);