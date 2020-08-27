const custo = 100;
const ganho = 200;
const imposto = custo * 0.2;
const custoTotal = custo + imposto;
const lucro = (ganho - custoTotal) * 1000;

if (custo >= 0 && ganho >= 0){
    console.log(lucro);
} else {
    console.log("erro, valores de entrada invalidos");
}
