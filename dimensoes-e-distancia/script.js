const listaAnimais = document.querySelector('.animais-lista');

listaAnimais.clientHeight;//height + paddings
listaAnimais.offsetHeight;//height + padding + border
listaAnimais.scrollHeight;//height total, mesmo dentro do scroll


//offsetTop distancia entre o topo do elemento e o topo da pagina
//offsetLeft distancia entre o canto esquerdo do item e o canto esquerdo da pagina
//getBoundingClientRect passa os atributos de dimensao do 
listaAnimais.offsetTop
listaAnimais.offsetLeft
listaAnimais.getBoundingClientRect()

//mede altura e largua da tela do usuario
window.innerHeight
window.innerWidth

//if(window.innerHeight < 600){
  //console.log('tela menor que 600px')
  //console.log(`valor atual é ${innerHeight}`)
//}else{
  //console.log('tela maior que 600px')
  //console.log(`valor atual é ${innerHeight}`)
//}


//matchMedia() utiliza um media-query como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

if(small.matches){
  console.log(`tela menor que 600px, valor atual é ${innerWidth}`)
}else{
  console.log(`tela maior que 600px, valor atual é ${innerWidth}`)
}



//------------exercicios --------------------



// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop
console.log(imgTop)

// Retorne a soma da largura de todas as imagens
function somaImagens(){
  const imgLargura = document.querySelectorAll('img')
  let soma = 0;
  imgLargura.forEach((x) => {
    soma = soma + x.offsetWidth
  })
  console.log(soma)
}
window.onload = function(){
  somaImagens();
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const linksPagina = document.querySelectorAll('a');
linksPagina.forEach((item)=>{
  const linkWidth = item.offsetWidth;
  const linkHeight = item.offsetHeight;
  if(linkHeight >= 48 && linkWidth >= 48){
    console.log('possui acessibilidade')
  }else{
    console.log('nao possui acessibilidade')
  }
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector('.menu')

const tela = window.matchMedia('(max-width: 720px)')
if(tela.matches){
  console.log('tela menor que 720px')
  menu.classList.add('menu-mobile')
}else {
  console.log('tela maior que 720px')
}

console.log(tela)