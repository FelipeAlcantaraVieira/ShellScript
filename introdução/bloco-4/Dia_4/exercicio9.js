let palavra = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function getArrayStringMaxValue(palavra){
    let maiorPalavra = palavra[0];
    for (let value in palavra){
        if (maiorPalavra.length  < palavra[value].length){
            maiorPalavra = palavra[value];
        }
    }
    return maiorPalavra
}
console.log(getArrayStringMaxValue(palavra));