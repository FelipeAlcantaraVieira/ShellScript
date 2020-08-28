let arrayNumbers = [];
let arrayDivision = [];

for (counter = 0; counter <= 25; counter += 1 ){
    arrayNumbers.push(counter);
    arrayDivision.push(arrayNumbers[counter] / 2);
}
console.log(arrayDivision);
