// parte 1
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
leftDiv.className = 'left-content';
mainDiv.appendChild(leftDiv);

// exercicio 6
const rightDiv = document.createElement('div');
rightDiv.className = 'right-content';
mainDiv.appendChild(rightDiv);

// exercicio 7
const image = document.createElement('img');
image.className = 'small-image';
image.src = "https://picsum.photos/200";
leftDiv.appendChild(image);

// exercicio 8
const list = document.createElement('ul');
let array = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
for (let listElement of array){
    let listElementItem = document.createElement('li');
    listElementItem.innerText = listElement;
    list.appendChild(listElementItem);
}
rightDiv.appendChild(list);

// exercicio 9
for (counter = 1; counter <= 4; counter += 1){
    const h3Header = document.createElement('h3');
    h3Header.innerHTML = 'numero ' + counter;
    mainDiv.appendChild(h3Header);
}

// parte 2
// exercicio 1
firstHeader.className = 'title';

// exercicio 2
let h3Header = document.getElementsByTagName('h3');
for (let indexu in h3Header) {
    h3Header[indexu].className = 'description';
}

// exercicio 3
mainDiv.removeChild(leftDiv);