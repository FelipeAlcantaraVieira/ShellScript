let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpar = 0;

for (let counter in numbers){
    if (numbers[counter] % 2 != 0){
        numerosImpar += 1;
    }
}
console.log(`o vetor tem ${numerosImpar} numeros impares`);