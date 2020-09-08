function getRepeatedNumbers(numbers){
    let contadorNumRepetidos = 0;
    let numeroContador = 0;
    let indexRepetidos = 0;
    for (let index in numbers){
        let verificador = numbers[index];
        for (let index2 in numbers){
            if (verificador === numbers[index2]){
                numeroContador += 1;
            }
        }
        if (numeroContador > contadorNumRepetidos){
            contadorNumRepetidos = numeroContador;
            indexRepetidos = index;
        }
        numeroContador = 0;
    }
    return numbers[indexRepetidos];
    }


let numbers = [2, 3, 2, 5, 8, 2, 3];

console.log(getRepeatedNumbers(numbers));