//1. Select Menu from the DOM
let menuButton = document.querySelector('.menu-btn');


//2. Add event listener to the menu button
menuButton.addEventListener("click",(e) => {
    let nav = document.querySelector('nav');

    if (nav.style.display === ''){
        nav.style.display = 'flex';
    } else{
        nav.style.display = '';
    }
//4. Toggle x animation
    menuButton.classList.toggle('change');


} );


