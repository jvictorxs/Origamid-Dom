//addEventListener adiciona uma função ao elemtno, esta chamada de callback, que sera ativada assim que certo evento ocorrer neste elemento.
//elemento.addEventListener(event, callback, options)

// const img = document.querySelector('img')

// img.addEventListener('click', () => {
//   console.log('clicou')
// })

//boa pratica
// function callback(){
//   console.log('clicou')
// }
// img.addEventListener('click', callback);

//---------event--------------
// const animaisLista = document.querySelector('.animais-lista');

// function callbackLista(e){
//   console.log(e.currentTarget);// toda local que esta selecionado
//   console.log(e.target);//exatamente onde clicou
//   console.log(e.type) //tipo de evento
// }

// animaisLista.addEventListener('click', callbackLista);


//-------------------preventDefault----------------
//previne que um evento ocorra
//nesse exemplo esta impedindo de ir para a pagina externa com o click
// const link = document.querySelector('a[href^="https"]')

// function linkPrevent(e){
//   e.preventDefault();
//   console.log(this.getAttribute('href'))//this é o mesmo que currentTarget
// }

// link.addEventListener('click', linkPrevent)

//tipos de eventos entre outros varios
//click, ocorre ao clicar
//mouseenter, ocorre ao mouse passar
//mousemove, ocorre ao mouse se movimentar
//keydown, ocorre ao pressionar uma tecla
//keyup, ocorre na subida do botao

//keyboard
//podendo criar um evento durante a navegação
// function handleKeyboard(event) {
//   if(event.key === 'a')
//     document.body.classList.toggle('azul');
//   else if(event.key === 'v')
//     document.body.classList.toggle('vermelho');
// }

// window.addEventListener('keydown', handleKeyboard);


//forEach e Eventos

// const imgs = document.querySelectorAll('img');

// function imgSrc(event){
//   const src = event.currentTarget.getAttribute('src');
//   console.log(src)
// }

// imgs.forEach((img)=> {
//   img.addEventListener('click', imgSrc)
// });

//-----------exercicios---------------


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]');

function prevent(e){
  e.preventDefault();
  links.forEach((e)=>{
    e.classList.remove('ativo')
  })
  e.currentTarget.classList.add('ativo')
};

links.forEach((e)=>{
  e.addEventListener('click', prevent)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos =document.querySelectorAll('body *');

function clickElemento(e){
  console.log(e.currentTarget);
}

todosElementos.forEach((e)=>{
  e.addEventListener('click', clickElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// function clickElemento(e){
//   e.target.remove();
// }

todosElementos.forEach((e)=>{
  e.addEventListener('click', clickElemento)
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const fontSize = document.querySelector('body *')

function teclaT (e){
  if(e.key === 't'){
    document.documentElement.classList.toggle('textoMaior')
    console.log('t')
  }
}

window.addEventListener('keydown', teclaT);

// documentElement  é a tag html