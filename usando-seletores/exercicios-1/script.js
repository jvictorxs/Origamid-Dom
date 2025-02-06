// Retorne no console todas as imagens do site
const imagensSite = document.getElementsByTagName('img');
console.log(imagensSite);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemImagem = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagemImagem);
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
//forma de fazer 1
//const primeiroH2 =document.querySelector('.animais-descricao h2');
//forma de fazer 2
const primeiroH2 = document.querySelector('.animais-descricao');
const h2Animais = primeiroH2.querySelector('h2');
console.log(h2Animais);
// Selecione o último p do site
const todosP = document.querySelectorAll('p');

console.log(todosP[todosP.length -1]);
// todosP.forEach(x => console.log(x.innerText));