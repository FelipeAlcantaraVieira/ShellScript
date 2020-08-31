let number = 5;
let array = [];

for (counter = 0; counter <= number; counter += 1){
    array.push("*");
}
/* a função exemplo.join() retorna a array "exemplo" como uma string onde o separador pode ser determinado. No caso ('') retorna sem um separador */
for (counter2 = 0; counter2 <= number; counter2 +=1) {
    console.log(`${array.join('')}`);
}
