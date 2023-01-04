
let sun = document.querySelector("#sun")
let text = document.querySelector("#text")
let btn = document.querySelector("#btn")
let firstTree = document.querySelector("#firstTree")
let secondTree = document.querySelector("#secondTree")
let firstHill = document.querySelector("#firstHill")
let middlHill = document.querySelector("#middlHill")
let last = document.querySelector("#last")
let sec = document.querySelector("#sec")
let header = document.querySelector("header")
let toggleMenu = document.querySelector(".toggle")
let navigationMenu = document.querySelector(".navigation")
const card = document.querySelectorAll(".card__inner")


window.addEventListener("scroll", function(){
    let value = window.scrollY;
    sun.style.top = value * 0.8  + "px"
    text.style.top = value * 1.05 + 230 + "px"
    btn.style.top = `${value * 1.05 + 310}px`
    firstTree.style.top = value * 0.45 + "px"
    secondTree.style.top = value * 0.30 + "px"
    firstHill.style.top = value * 0.20 + "px"
    middlHill.style.top = value * 0.10 + "px"
    header.style.top = value * 0.5 + "px"
})



toggleMenu.addEventListener("click", function(){
  toggleMenu.classList.toggle("active")
  navigationMenu.classList.toggle("active")

})


// for (let i = 0; i < card.length ; i++ ){
//   card[i].addEventListener("click", function () {
//     card[i].classList.toggle('is-flipped');
//   });
// }


VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 10,
  speed: 300,
  glare: true,
  "max-glare":0.5,
});