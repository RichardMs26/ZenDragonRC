document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        header.classList.toggle("sticky", window.scrollY > 60);
    });
});

let navbar = document.getElementById("navbar1");

// function opennav(){
//     navbar.classList.add("open");
// }

// function closenav(){
//     navbar.classList.remove("open");
// }

function opennav(){
    navbar.classList.add("open");
    document.querySelector("header").classList.add("open-menu"); 
} 

function closenav(){
    navbar.classList.remove("open");
    document.querySelector("header").classList.remove("open-menu");
}