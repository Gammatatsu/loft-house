let menuButton = document.querySelector('.header__navigation-button')
let  headerMenu = document.querySelector('.header__navigation-list')
 
menuButton.addEventListener('click',() =>{
    menuButton.classList.toggle('header__navigation-button--active')
    headerMenu.classList.toggle('header__navigation-list--active')
    if(headerMenu.classList.contains('header__navigation-list--active')){
        document.body.style.overflowY = 'hidden'
    }
    else{
        document.body.style.overflowY = 'unset'
    }
});
