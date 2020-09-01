function getMaxValueNumber(numbers){
    let maiorNumero = 0;
    let maiorIndice = 0;
    for (let counter in numbers) {
        if (numbers[counter] > maiorNumero){
            maiorNumero = numbers[counter];
            maiorIndice = counter;
        }
    }
    return maiorIndice;
    }


let numbers = [2, 3, 6, 7, 10, 1];

console.log(getMaxValueNumber(numbers));