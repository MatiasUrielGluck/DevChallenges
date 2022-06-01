const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");
const thisInterior = document.querySelector(".this_interior");
const content = document.querySelector(".content");
const footer = document.querySelector("footer");

navbar.classList.toggle("navbar-open");
navMenu.classList.toggle("nav-menu-open");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamb-active");
    thisInterior.classList.toggle("hidden");
    navbar.classList.toggle("navbar-open");
    navMenu.classList.toggle("nav-menu-open");
    content.classList.toggle("hidden");
    footer.classList.toggle("hidden");
})