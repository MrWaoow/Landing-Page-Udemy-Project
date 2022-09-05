/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll("section");
const ulNav = document.querySelector("#navbar__list");
const topBtn = document.querySelector("#top__btn");
const navHeader = document.querySelector("#nav__header");
const newLiBtn = document.createElement("li");
const newListLink = document.createElement("a");
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function deleteClass(elements,className){
    elements.forEach(element => {element.classList.remove(className);});
}

  function addClass(elements,className){
      elements.forEach(element => {element.classList.add(className);});
  }

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  deleteClass(document.querySelectorAll(".menu__link"),"menu__link__focus");
  
}
topBtn.setAttribute("onclick", "topFunction()");
function hideShowButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
      navHeader.style.display = "block";
    } else {
      topBtn.style.display = "none";
      navHeader.style.display = "none";
    }
  }
  function goToSec(linkContent){
        sections.forEach(element => {
        if(linkContent.textContent == element.getAttribute("data-nav")){
          element.scrollIntoView({behavior: 'smooth'});
        }
        });}
function respNav() {
  const navElement = document.getElementById("navbar__list");
  if (navElement.className === "topnav") {
    navElement.classList.add("responsive");
  } else {
    navElement.classList.remove("responsive");
  }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
sections.forEach(element => {
    const newLi = document.createElement("li");
    const newLink = document.createElement("a");
    newLink.textContent = element.getAttribute("data-nav");
    newLink.setAttribute("onclick", "goToSec(this)");
    newLink.setAttribute("class", "menu__link");
    newLi.appendChild(newLink);
    ulNav.appendChild(newLi);
});
// list Icon
newLiBtn.setAttribute("class", "icon");
newListLink.setAttribute("class", "menu__link fas fa-bars fa-3x");
newListLink.setAttribute("href", "javascript:void(0);");
newListLink.setAttribute("onclick", "respNav()");
newLiBtn.appendChild(newListLink);
ulNav.appendChild(newLiBtn);

// Add class 'active' to section when near top of viewport
function makeItActive(){
    hideShowButton();
    sections.forEach(element => {
        let domRect = element.getBoundingClientRect();
        if((domRect.bottom > 400 && domRect.top <= 250)){
            //remove active class from last element
            deleteClass(sections,"your-active-class");
            //add active class to current element
            element.classList.add("your-active-class");
            const dataNav = element.getAttribute("data-nav");
            const navList = document.querySelectorAll(".menu__link");
            //active link
            navList.forEach(liElement => {
                if(liElement.textContent == dataNav){
                    deleteClass(navList,"menu__link__focus");
                    liElement.classList.add("menu__link__focus");
                }
                });
            topBtn.style.display ="block";
        }else if(document.body.getBoundingClientRect().top == 0){
            topBtn.style.display ="none";
        }
});
}

// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', makeItActive);
