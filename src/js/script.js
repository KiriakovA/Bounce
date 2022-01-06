'use strict';

var burger = document.querySelector('.burger_menu');
var navSelector = document.querySelector('.nav');
burger.dataset.open = false;
burger.addEventListener('click', burgerOpen);
window.addEventListener('resize', burgerClassKill);
var pageWidth = document.documentElement.scrollWidth;
function burgerClassKill(){
    if(pageWidth>550){
        burger.classList.remove('open-menu');
        navSelector.classList.remove('open-nav');
        navSelector.classList.add('close-nav');
        burger.dataset.open = false;
    }
}
function burgerOpen(e){
    var menuIsOpen = burger.getAttribute("data-open");
    switch (menuIsOpen){
        case 'false':
            burger.dataset.open = true;
            burger.classList.remove('close-menu');
            burger.classList.toggle('open-menu');
            navSelector.classList.remove('close-nav');
            navSelector.classList.toggle('open-nav');
            break;
        case 'true':
            burger.dataset.open = false;
            burger.classList.remove('open-menu');
            burger.classList.toggle('close-menu');
            navSelector.classList.remove('open-nav');
            navSelector.classList.toggle('close-nav');
    }
}

var fixHeight = 100;
document.addEventListener('scroll', function (){
    var currentScroll = () =>{
        return window.pageYOffset || document.documentElement.scrollTop;
    };
    if (currentScroll()>=fixHeight){
        document.querySelector('header').classList.add('fixed__menu');
        document.querySelector('header').classList.remove('header');
    }else {
        document.querySelector('header').classList.add('header');
        document.querySelector('header').classList.remove('fixed__menu');
    }
});
var sliderButtons = document.querySelectorAll('.card_selector span');
var eventOnElement =(element, eventFunc)=>{
    for(let key of element){
        key.addEventListener('click',eventFunc );
    }
}
var slidersButtonsColor = (event)=>{
    let selectorColor = 'card_selector_color';
    var selector = event.target;
    var childList = selector.parentElement.querySelectorAll('*');
    for (let key of childList){
        if(key.classList.contains(selectorColor)){
            key.removeAttribute('class');
        }
    }
    selector.classList.add('card_selector_color');
}
eventOnElement(sliderButtons, slidersButtonsColor);