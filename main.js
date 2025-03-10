console.log("a")
//text effect animation
const containerEl = document.querySelector(".container");

const careers = ["Web Developer", "Designer", "Freelancer", "Student"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h3>And I'm ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} <span>${careers[
    careerIndex ].slice(0, characterIndex)}_</span></h3>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}


/*======================toggle wala icon navbar ko=====*/

let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick= ()=> {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
/*======================scroll section=====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = ()=>{
sections.forEach(sec => {
let top = window.scrolly;
let offset  = sec.offsetTop -  150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');
if(top >= offset && top < offset + height) {
navLinks.forEach.apply(links => {
links.classList.remove('active');
document.querySelector('header nav a[href*=', id + ']').classList.add('active');
});
};
});
/*Iticky navbar*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrolly > 100);
/*=== remove toggle ficon and navbar*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
}; 