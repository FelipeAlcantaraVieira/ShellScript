const fun = (...input) => input.reduce((acc, curr) => acc + curr);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(fun(1,2)); //3 
console.log(fun(1,2,3)); //6 
console.log(fun(1,2,3,4,5)); //15 
console.log(fun(...array));


const nationality = ({ firstName, nationality = 'brazilian' }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))

function foo (x, y = x+1, z = x+y) {
  return [x, y, z];
}

console.log(foo(2));
console.log(foo(2, 20));
console.log(foo(2, 20, 40));
