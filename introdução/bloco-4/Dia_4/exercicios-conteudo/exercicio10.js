function lucroTotal (custo, ganho){
const imposto = custo * 0.2;
const custoTotal = custo + imposto;
const lucro = (ganho - custoTotal) * 1000;

if (custo >= 0 && ganho >= 0){
    return lucro;
} else {
    return 'erro, valores de entrada invalidos';
}
}
console.log(lucroTotal(100, 200));