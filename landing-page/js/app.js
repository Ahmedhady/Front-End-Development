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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const stages=document.querySelectorAll('section');
for(let i=0;i<stages.length; i++){
    stages[i];
}
const stageList=document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Navigation is built dynamically as an unordered list.
function createMyList(){
    for (stage of stages){
        myList = document.createElement('li');
        stageId = stage.id;
        dataNav = stage.dataset.nav;
        myList.innerHTML = `<li><a class="menu__link" href ="#${stageId}" data-nav="${stageId}">${dataNav}</a></li>`;
        stageList.appendChild(myList);
    }
}
//Function to detect the element location relative to the viewport using .getBoundingClientRect() built-in function.
//Section Active State
//call 'your-active-class' in all sections in the wep page to make Active State.
function stageView1 (part1){
    return (part1.getBoundingClientRect().top<=150);
}
function stageView2 (part2){
    return (part2.getBoundingClientRect().bottom>=150);
}
function myActive() {
    for(stage of stages){
        let highlight = stageList.querySelector(`[data-nav=${stage.id}]`);

        if (stageView1(stage) && stageView2(stage)){
            stage.classList.add('your-active-class');
            highlight.classList.add('highlight');
            //myList.classList.add('menu__link');
        } else {
            stage.classList.remove('your-active-class');
            highlight.classList.remove('highlight');
            //myList.classList.remove('menu__link');
        }
    } 
}
//Scroll to Anchor
function mySmooth (scrollSmooth){
    targetelement = scrollSmooth.target.dataset.nav;
    scrollSmooth.preventDefault();
    if (targetelement) {
      document
        .getElementById(`${targetelement}`)
        .scrollIntoView({ behavior: "smooth" });
    }
}
  //call functions as wriiten in development startegy
  createMyList();
  document.addEventListener('scroll', myActive);
  document.addEventListener('click', mySmooth);
//or
  //stageList.addEventListener('click',smooth);
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active