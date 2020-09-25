const select = document.querySelector('#select-id');
const diaData = document.querySelector('#dia-inicio');
const mesData = document.querySelector('#mes-inicio');
const yearData = document.querySelector('#ano-inicio');
let estados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
];

for (let index = 0; index < estados.length; index += 1) {
    let options = document.createElement("OPTION");
    options.setAttribute("value", "index");
    let optionsText = document.createTextNode(estados[index]);
    options.appendChild(optionsText);
    select.appendChild(options);
}

let dayArray = [];

for (let index2 = 1; index2 <= 31; index2 += 1) {
    dayArray.push(index2);
}

for (let index3 = 0; index3 < dayArray.length; index3 += 1) {
    let dayOptions = document.createElement("OPTION");
    dayOptions.setAttribute("value", "index3");
    let dayOptionsText = document.createTextNode(dayArray[index3]);
    dayOptions.appendChild(dayOptionsText);
    diaData.appendChild(dayOptions);
}

let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

for (let index4 = 0; index4 < meses.length; index4 += 1) {
    let months = document.createElement("OPTION");
    months.setAttribute("value", "index4");
    let monthsText = document.createTextNode(meses[index4]);
    months.appendChild(monthsText);
    mesData.appendChild(months);
}

let yearArray = [];

for (let index5 = 1950; index5 <= 2020; index5 += 1) {
    yearArray.push(index5);
}

for (let index6 = 0; index6 < yearArray.length; index6 += 1) {
    let yearOptions = document.createElement("OPTION");
    yearOptions.setAttribute("value", "index6");
    let yearOptionsText = document.createTextNode(yearArray[index6]);
    yearOptions.appendChild(yearOptionsText);
    yearData.appendChild(yearOptions);
}