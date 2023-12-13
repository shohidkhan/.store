
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  });

// Copy menu for mobile

function copyMenu(){
    //copy inside .dpt-cat to departments
    var dptCategory=document.querySelector('.dpt-cat');
    var dptPlace=document.querySelector('.departments');
    dptPlace.innerHTML=dptCategory.innerHTML;

    //copy the inside nav to nav
    var mainNav=document.querySelector('.header-nav nav');
    var navPlace=document.querySelector('.off-canvas nav')
    navPlace.innerHTML=mainNav.innerHTML;

    //copy .header-top to .thetop-nav
    var topNav=document.querySelector('.header-top .wrapper');
    var topPlace=document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML=topNav.innerHTML;
}
 copyMenu();
 const subMenu=document.querySelectorAll('.has-child .icon-small');
 subMenu.forEach((menu)=>menu.addEventListener('click',toggle))

 function toggle(e){
    e.preventDefault();
    subMenu.forEach((item)=>item != this ? item.closest('.has-child ').classList.remove('expand'):null);
    if(this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
 }
 
//show mobile menu

const menuButton=document.querySelector('.trigger ');
const closeButton=document.querySelector('.t-close');
const addClass=document.querySelector('.site');
const overlay=document.querySelector('.overlay');

menuButton.addEventListener('click',function(e){
    e.preventDefault();
    addClass.classList.toggle('show-menu')
});
closeButton.addEventListener('click',function(){
    addClass.classList.remove('show-menu')
})
overlay.addEventListener('click',function(){
  addClass.classList.remove('show-menu')
})
 

//slider

//show search
const searchButton=document.querySelector('.t-search');
const closeSearch=document.querySelector('.search-close');
const showClass=document.querySelector('.site');
searchButton.addEventListener('click',function(e){
  e.preventDefault();
  showClass.classList.toggle('show-search');
});
closeSearch.addEventListener('click',function(e){
  e.preventDefault();
  showClass.classList.remove('show-search');
});

