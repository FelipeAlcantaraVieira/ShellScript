const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const result = numbers.filter((number) => (
  number % 2 === 0
)).reduce((even, evenNumber) => even + evenNumber);

console.log(result);

const result2 = numbers.reduce((even, number) => (number % 2 === 0) ? even + number : even, 0);

console.log(result2);