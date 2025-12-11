/* 

document -> HTML

getElementById -> Trás UM elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa classe
getElementByTagName -> Trás TODOS os elementos com essa TAG
getElementByName -> Trás TODOS os elementos com esse NAME

querySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar

*/


const elements = document.querySelectorAll("#main-input");

elements.placeholder = "Agora é este texto"
console.log("elements.placeholder")