//const menu = document.querySelector('.menu');

//adiciona classe
// menu.classList.add('ativo', 'teste');
// //remove classe
//  menu.classList.remove('azul');
// //adiciona classe se nao houve e remove se houver
//  menu.classList.toggle('azul')
// //contains retorna true ou false
// if(menu.classList.contains('azul')){
//   menu.classList.add('possui-azul');
// }else {
//   menu.classList.add('não-possui-azul');
// }

//console.log(menu.classList)

//attributes

//const animais = document.querySelector('.animais');
//console.log(animais.attributes)


//getAttribute e setAttribute
// const img = document.querySelector('img');

// //chama atributo de uma tag
// const srcImg = img.getAttribute('src');
// //altera/cria atributo de uma tag
// img.setAttribute('alt', 'É uma raposa');
// //verifica se tag é true
// img.hasAttribute('alt');
// //remove atributo
// img.removeAttribute('alt')

// console.log(srcImg)

// console.log(img.getAttribute('alt'))


//read only vs Writable

const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only


//--------exercicios--------

// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach((item =>{
  item.classList.add('ativo')
}))
console.log(menu)

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item =>{
  item.classList.remove('ativo')
}))
menu[0].classList.add('ativo')
console.log(menu)

// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img');
img.forEach((x)=>{
   console.log(x.hasAttribute('alt'))
}) 

// Modifique o href do link externo no menu

const link = document.querySelector('a[href^="http');
link.setAttribute('href', 'https://origamid.com.br')
