const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
// Galery



// Display Mobile Menu 
const mobileMenu = ( ) => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

}
menu.addEventListener('click',mobileMenu);





// Load function 
var preload = document.createElement('div');

preload.className = "preloader";
preload.innerHTML = '<div class="b-ico-preloader"></div><div class="spinner"></div>';
document.body.appendChild(preload);

window.addEventListener('load', function() {
  preload.className +=  ' fade';
  setTimeout(function(){
  preload.style.display = 'none';
  },1000);
})