let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let counter in numbers) {
    soma += numbers[counter];
}
console.log(`a soma dos valores contidos nesse vetor é: ${soma}`);