let number = 47;
let array = [];

for (counter = 0; counter <= number; counter += 1){
    if (number % counter === 0){
        array.push(counter);
    }
}
if (array.length > 2){
    console.log('o número não é primo');
} else{
    console.log('o número é primo');
}