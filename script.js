/* 

EVENTOS

*/

const input = document.querySelector("#main-input")
const paragrafo = document.querySelector(".paragraph-js")

function cliqueiNoBotao(){
    paragrafo.textContent = input.value
}

function digiteiNoInput(){
    console.log("Digitei no input")
}