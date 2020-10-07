    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  //return arrays.flat()
  return arrays.reduce((acc, array) => acc.concat(array), [])
}
assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);