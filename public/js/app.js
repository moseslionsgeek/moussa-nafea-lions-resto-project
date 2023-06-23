// *** tabs
let carusel = document.querySelector(".carusel");
let isDrag = false,
  startX,
  startScrollLeft;
// *** slid-one
let slidBtn = document.querySelectorAll(".btnsslid button");


let firstWidth = document.querySelector(".card").offsetWidth;
slidBtn.forEach(btn => {
  btn.addEventListener('click',()=>{
    carusel.scrollLeft += btn.id === "slidBtn1" ? -firstWidth : firstWidth;

})
});
