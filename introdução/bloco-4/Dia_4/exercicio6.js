function palindromo(str) {
   let reversed = str.split("").reverse().join(""); //o que isso faz é basicamente dividir uma string em array de strings, inverter as posições dos elementos e depois juntar tudo em uma string novamente tldr: inverte uma string
    if (str === reversed) {
        return 'true';
    } else {
        return 'false';
    }
}

console.log(palindromo('arara'));