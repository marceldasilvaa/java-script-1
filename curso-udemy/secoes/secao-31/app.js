/*
// Exibir pai do Elemento desejado
const paleta1 = document.querySelector('#paleta1')
console.log(paleta1.parentNode)

// Exibir filho do elemento desejado
const paletas_div = document.querySelector('.paletas_div')
console.log(paletas_div.children)

// Exibir primeiro filho e último filho do elemento desejado
console.log(paletas_div.firstElementChild)
console.log(paletas_div.lastElementChild)

// Exibir irmãos anteriores e sucessores do elemento desejado
const paleta2 = document.querySelector('#paleta2')
console.log(paleta2.previousElementSibling)
console.log(paleta2.nextElementSibling)

// Criar elemento HTML
const titulo = document.createElement('h1')
titulo.textContent = 'To Do List'
titulo.classList.add('titulo')

// Exibir elemento criado na interface

// Exibindo com insertBefore
const body = document.querySelector('body')
body.insertBefore(titulo, paletas_div)

// Exibindo com AppendChild
const paleta4 = document.createElement('div')
paletas_div.appendChild(paleta4)
console.log(paleta4)

// Adicionando uma classe ao elemento criado
paleta4.classList.add('paleta')


Remover o elemento criado de uma classe
paleta4.classList.remove('paleta')


// Removendo elemento HTML

const paletas_div = document.querySelector('.paletas_div')
const paleta2 = document.querySelector('#paleta2')

paletas_div.removeChild(paleta2)
*/

// Removendo todos os filhos do elemento HTML

const paletas_div = document.querySelector('.paletas_div')

while (paletas_div.firstElementChild) {
    paletas_div.removeChild(paletas_div.firstElementChild)
}