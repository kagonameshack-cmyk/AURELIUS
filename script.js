const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});



/*=========================================
SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(item=>{

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();





/*==================================================
SCROLL PROGRESS
==================================================*/

const progressBar =
document.querySelector(".scroll-progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
    window.scrollY;

    const pageHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

    const progress =
    (scrollTop / pageHeight) * 100;

    progressBar.style.width =
    progress + "%";

});
