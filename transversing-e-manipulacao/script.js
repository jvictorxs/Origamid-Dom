//------------innerHTML innerText--------------------
// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// insere uma nova linha de codigo dentro da tag
//h1.innerHTML = '<p>Novo Texto</p>';

//puxa apenas os texto dentro da tag html
// animaisLista.innerText;

//puxa tudo que esta dentro da tag
// animaisLista.innerHTML;

//------------------Transversing-------------------------
const lista = document.querySelector('.animais-lista');

//puxa o proximo elemento do mesmo nivel
console.log(lista.nextElementSibling)

//puxa o elemento anterior do mesmo nivel
console.log(lista.previousElementSibling)

//puxa o elemento pai onde a tag esta envolvida ou o pai do pai como no exemplo
console.log(lista.parentElement.parentElement)

//selecionando ultimo elemento da lista
// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector('li:last-child'));


//-----------------Element vs Node -----------------------
//seleciona uma nodeList contendo o conteudo dentro da tag
console.log(lista.childNodes)


//------------------manipulando elementos-----------------
const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

//move o 'titulo' para o final de 'animais'
// animais.appendChild(titulo);


//'animais' foi movido para 'contato' ficando antes do 'titulo'
//insere o 'animais' antes do 'titulo' dentro de 'contato'

// contato.insertBefore(animais,titulo);


//remove o parametro do objeto

// contato.removeChild(titulo);

//substitui o primeiro(lista) parametro pelo segundo(titulo)

// contato.replaceChild(lista, titulo);



//--------criar novos elementos com creatElement()--------

//criando uma tag, texto e classe e adicionando no html

// const novoh1 = document.createElement('h1')
// novoh1.innerText = 'Novo Título';
// novoh1.classList.add('titulo');
// lista.appendChild(novoh1)



//-------------clonar elementos com cloneNode()-----------

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true)

cloneH1.classList.add('azul')
faq.appendChild(cloneH1)
console.log(cloneH1)