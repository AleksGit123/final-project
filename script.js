"use strict"

let burgerMenu = document.querySelector(".burger_menu");
let closeIcon = document.querySelector(".close_button");
let pageList = document.querySelector(".burger_menu_nav");


  
burgerMenu.addEventListener("click", () => {
    closeIcon.style.display = "block"; 
    burgerMenu.style.display ="none"; 
    pageList.style.left ="0";  
});

closeIcon.addEventListener("click", () => {
    closeIcon.style.display ="none"; 
    burgerMenu.style.display = "block";
    pageList.style.left = "-70%"; 
});


