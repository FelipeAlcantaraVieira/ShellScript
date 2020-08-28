let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];

for (counter = 0; counter < numbers.length; counter += 1){
    if (counter == numbers.length - 1){
        numbersMultiplied.push(numbers[counter] * 2);
    } else {
        numbersMultiplied.push(numbers[counter] * numbers[counter+1]);
    }
}
console.log(numbersMultiplied);