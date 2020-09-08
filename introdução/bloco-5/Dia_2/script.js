// exercicio 1
const firstHeader = document.createElement('h1');
firstHeader.innerText = "Exercício 5.2 - JavaScript DOM"
document.body.appendChild(firstHeader);
// exercicio 2
const primeiraDiv = document.createElement('div');
primeiraDiv.className = 'main-content';
document.body.appendChild(primeiraDiv);
// exercicio 3
const segundaDiv = document.createElement('div');
segundaDiv.className = 'center-content';
primeiraDiv.appendChild(segundaDiv);
// exercicio 4
const paragraph = document.createElement('p');
paragraph.innerHTML = 'algum texto';
segundaDiv.appendChild(paragraph);
// exercicio 5