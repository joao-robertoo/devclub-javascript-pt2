/* 

document -> HTML

getElementById -> Trás UM elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa classe
getElementByTagName -> Trás TODOS os elementos com essa TAG
getElementByName -> Trás TODOS os elementos com esse NAME

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar

*/


const element = document.querySelector(".paragraph-js");

element.innerHTML = "texto novo <b>Olá</b>" // TROCA O TEXTO

console.log(element.textContent) // SÓ HTML
console.log(element.innerText) //LEVA EM CONTA O CSS
console.log(element.innerHTML) // TRÁS TUDO -> Permite adicionar html