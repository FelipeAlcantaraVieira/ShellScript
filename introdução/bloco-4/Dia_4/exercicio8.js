function getMinValueNumber(numbers){
    let maiorNumero = 0;
    for (let counter in numbers) {
        if (numbers[counter] > maiorNumero){
            maiorNumero = numbers[counter];
        }
    }
    let menorNumero = maiorNumero
    let menorIndice;
    for (let counter in numbers) {
        if (numbers[counter] < menorNumero){
            menorNumero = numbers[counter];
            menorIndice = counter;
        }
    }
    return menorIndice;
}

let numbers = [2, 4, 6, 7, 10, 0, -3];

console.log(getMinValueNumber(numbers));