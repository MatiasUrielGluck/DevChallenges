const hambOpenBtn = document.querySelector("#hamb-open-btn");
const hambCloseBtn = document.querySelector("#hamb-close-btn");
const nav = document.querySelector("nav");

// Navbar links
const homeBtn = document.querySelector("#home-btn");
const servicesBtn = document.querySelector("#services-btn");
const projectsBtn = document.querySelector("#projects-btn");
const testimonyBtn = document.querySelector("#testimony-btn");
const contactBtn = document.querySelector("#contact-btn");

// Sections
const homeSection = document.querySelector("#home-section");
const servicesSection = document.querySelector("#services-section");
const projectsSection = document.querySelector("#projects-section");
const testimonySection = document.querySelector("#testimony-section");
const contactSection = document.querySelector("#contact-section");

// Scroll into section function
function addScrollListener(btn, section) {
    btn.addEventListener("click", () => {
        section.scrollIntoView({block: "start", behavior: "smooth"});
        nav.classList.add("inactive");
    });
}

addScrollListener(homeBtn, homeSection);
addScrollListener(servicesBtn, servicesSection);
addScrollListener(projectsBtn, projectsSection);
addScrollListener(testimonyBtn, testimonySection);
addScrollListener(contactBtn, contactSection);

hambOpenBtn.addEventListener("click", () => {
    nav.classList.remove("inactive");
});

hambCloseBtn.addEventListener("click", () => {
    nav.classList.add("inactive");
});