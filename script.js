"use strict"

let burgerMenu = document.querySelector(".burger_menu");
let menu = document.querySelector(".burger_menu_nav");
let makeAppear = document.querySelector(".burger_menu_nav").style;
burgerMenu.addEventListener("click", () => {
    if(makeAppear.left === "0px"){
            makeAppear.left = "-80%";
    }
    else{
        makeAppear.left = "0px";
    }
})