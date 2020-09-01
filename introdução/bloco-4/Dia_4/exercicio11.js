function somarNumeros (number){
    let soma = 0;
    for (somador = 0; somador <= number; somador += 1){
        soma += somador;
    }
    return soma;
}
console.log(somarNumeros(5));