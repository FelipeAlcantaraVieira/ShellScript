let number = 5;
let array = [];

for (counter = 0; counter <= number; counter += 1){
    array.push("*");
    /*console.log(`${array}`);*/
}

for (counter2 = 0; counter2 <= number; counter2 +=1) {
    console.log(`${array.join('')}`);
}