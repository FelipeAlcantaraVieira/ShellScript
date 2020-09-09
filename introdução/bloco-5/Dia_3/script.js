let botao = document.querySelector("#lib-button");
let noun = document.querySelector("#noun");
let adjetive = document.querySelector("#adjective");
let person = document.querySelector("#person");
let story = document.querySelector("#story");

botao.addEventListener("click", makeMadLib)

function makeMadLib(){
    let frase = person.value + ' ' + adjetive.value + ' ' + noun.value;
    story.innerHTML = frase;
}