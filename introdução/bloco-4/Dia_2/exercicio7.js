let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for (let counter in numbers) {
    if (numbers[counter] > maiorNumero){
        maiorNumero = numbers[counter];
    }
}
let menorNumero = maiorNumero;

for (let contador in numbers) {
    if (numbers[contador] < menorNumero){
        menorNumero = numbers[contador];
    }
}
console.log(menorNumero);