let number = 5;
let array = [];
let counter = number;
let espaco = '';
let coluna;
let linha;
let asterisk = '*';

for (linha = 0; linha < number; linha += 1){
    for (coluna = 0; coluna <= number; coluna += 1){
        if (coluna < counter) {
            espaco = espaco + ' ';
        } else {
            espaco = espaco + asterisk;
        }
    }
    console.log(espaco);
    counter -= 1;
    espaco = '';
} 
