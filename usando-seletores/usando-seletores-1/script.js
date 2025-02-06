//selecionando elemento html por id
//const animais = document.getElementById('animais');
console.log(animais);

//retorna lista de elementos
//retorna todos as classes que contem esse nome
const gridSection = document.getElementsByClassName('grid-section');

//retorna apenas a classes que estao nesse formato
//const contato = document.getElementsByClassName('grid-section contato');

//seleciona todas as tags UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

//retorna o [n] elemento
console.log(gridSection[2]);

//Seletor Geral Unico
//querySelector retorna o primeiro elemento que combina o seletor CSS

//const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato'); 
const primeiraLi = document.querySelector('li');
console.log(primeiraLi);
const primeiraUl = document.querySelector('ul')
console.log(primeiraUl);

//link interno
 const linksInternos = document.querySelector('[href^="#"]');

//seleciona todos os elementos com o nome
//querySelectorAll

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg)