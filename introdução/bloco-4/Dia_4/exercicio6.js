function palindromo(str) {
   let reversed = str.split("").reverse().join(""); //divide uma string em array de strings, inverter as posições dos elementos e depois juntar tudo em uma string novamente tldr: inverte uma string
    if (str === reversed) {
        return 'true';
    } else {
        return 'false';
    }
}

console.log(palindromo('arara'));