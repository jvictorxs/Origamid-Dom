function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('ativo')

  if(tabMenu.length && tabContent.length){
    function activeTab(index){
      tabContent.forEach((section)=>{
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index)=>{
      itemMenu.addEventListener('click', ()=>{
        activeTab(index)
      })
    })
  }
}
initTabNav();
//--------------------accordion list----------------------
function initAccordion (){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo'
  if(accordionList.length){
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion(){
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item)=>{
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion();

//---------------scroll suave link interno----------------
function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event){
    //impede de ocorrer a ação
    event.preventDefault();
    //pega o atributo do href
    const href = event.currentTarget.getAttribute('href');

    const section = document.querySelector(href);
    //scroll suave, behavior: comportamento, block: onde para
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });


    //forma alternativa de scroll suave
    //offseTop para no topo do objeto
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  }

  linksInternos.forEach((link)=>{
    link.addEventListener('click', scrollToSection)
  })
}
initScrollSuave();