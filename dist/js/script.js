const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuLink = document.querySelector('.menu__block'),
      closeElem = document.querySelector('.menu__close'),
      counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML; // чтобы длина цветной линии аавтоматически соответствовала указанным данным
});

menu.addEventListener('click', (e) => {
    if (e.target !== closeElem && e.target !== menuLink) { 
        menu.classList.remove('active');
        document.body.style.overlay = '';
    } 
});

