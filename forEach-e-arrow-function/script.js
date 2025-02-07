//const imgs = document.querySelectorAll('img');
//console.log(imgs);

//parametro 1(item) mostra o item de onde ta sendo puxado
//parametro 2(index) posição do item na array 
//parametro 3 (array) mostra o array do objeto
//imgs.forEach(function(item, index, array){
  //console.log(item, index, array)
//})

//const titulos = document.getElementsByClassName('titulo');
//console.log(titulos)
//transforma htmlcollection item que parece com array em array
//const titulosArray = Array.from(titulos);
//console.log(titulosArray)
//titulosArray.forEach(function(item, index, array){
  //console.log(item, index, array)
//})

//arrow function
//encurta a expressao forEach(function(){})
//para forEach((item) =>{})
//const imgs = document.querySelectorAll('img');
//metodo padrao

//imgs.forEach((item) =>{
//  console.log(item)
//})

//funcao com uma linha de comando
//let i = 0;
//metodo completo
//imgs.forEach(function(){console.log(i++)});

//metodo com apenas um parametro
//imgs.forEach((item => console.log(i++)));

//metodo sem parametro
// imgs.forEach(() => console.log(i++));


//----------EXERCICIOS --------


// Mostre no console cada parágrado do site
const cadaP = document.querySelectorAll('p');
cadaP.forEach((item) => {console.log(item)});
// Mostre o texto dos parágrafos no console
cadaP.forEach((x) =>{ console.log(x.innerText)});
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

