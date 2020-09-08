// exercicio 1
const firstHeader = document.createElement('h1');
firstHeader.innerText = "Exercício 5.2 - JavaScript DOM"
document.body.appendChild(firstHeader);
// exercicio 2
const mainDiv = document.createElement('div');
mainDiv.className = 'main-content';
document.body.appendChild(mainDiv);
// exercicio 3
const centerDiv = document.createElement('div');
centerDiv.className = 'center-content';
mainDiv.appendChild(centerDiv);
// exercicio 4
const paragraph = document.createElement('p');
paragraph.innerHTML = 'algum texto';
centerDiv.appendChild(paragraph);
// exercicio 5
const leftDiv = document.createElement('div');
leftDiv.className = "left-content";
mainDiv.appendChild(leftDiv);
// exercicio 6
const rightDiv = document.createElement('div');
rightDiv.className = "right-content";
mainDiv.appendChild(rightDiv);
// exercicio 7