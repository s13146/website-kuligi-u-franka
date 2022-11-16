const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
// Gallery 
const thumbanils=document.querySelectorAll(".thumbnail img")
const popup=document.querySelector(".popup")
const popupClose=document.querySelector(".popup__close")
const popup_img=document.querySelector(".popup__img")
const arrow_left=document.querySelector(".popup__arrow--left")
const arrow_right=document.querySelector(".popup__arrow--right")

let currentImgIndex;


// Load function 
var preload = document.createElement('div');

preload.className = "preloader";
preload.innerHTML = '<div class="b-ico-preloader"></div><div class="spinner"></div>';
document.body.appendChild(preload);

window.addEventListener('load', function() {
  preload.className +=  ' fade';
  setTimeout(function(){
  preload.style.display = 'none';
  },100);
})

const showNextImage =() =>{
  if(currentImgIndex=== thumbanils.length-1){
    currentImgIndex=0;
  }
  else{
  currentImgIndex++;
  }
  popup_img.src=thumbanils[currentImgIndex].src;
;}

const showPreviousImage =() => {if(currentImgIndex=== 0) {
  currentImgIndex=thumbanils.length-1;
}
else {
  currentImgIndex--;
}
popup_img.src=thumbanils[currentImgIndex].src;
};

const closePopup=() => {
  popup.classList.add("fade-out");
  setTimeout(()=> {
    popup.classList.add("hidden");
    popup.classList.remove("fade-out");
  },300);
};

thumbanils.forEach((thumbanil,index)=>{
  thumbanil.addEventListener("click",(e)=> {
    popup.classList.remove("hidden");
    popup_img.src = e.target.src;
    currentImgIndex = index;
  })
});

popupClose.addEventListener("click",()=>{
  closePopup();
});

arrow_right.addEventListener("click",showNextImage);
arrow_left.addEventListener("click",showPreviousImage);

document.addEventListener("keydown",(e)=> {
  if(!popup.classList.contains("hidden")){
    if (e.key ==="ArrowRight" || e.keyCode === 39){
    showNextImage();
    }
  }

  if (e.key ==="ArrowLeft" || e.keyCode === 37){
    showPreviousImage();
  }

if (e.code === "Escape" || e.keyCode===27) {
  closePopup();
}
});


popup.addEventListener("click",(e)=>{
  if (e.target === popup){
    closePopup();
  }
});

// Display Mobile Menu 
const mobileMenu = ( ) => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

}
menu.addEventListener('click',mobileMenu);





