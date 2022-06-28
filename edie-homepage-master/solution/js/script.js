const hambOpenBtn = document.querySelector("#hamb-open-btn");
const hambCloseBtn = document.querySelector("#hamb-close-btn");
const nav = document.querySelector("nav");

hambOpenBtn.addEventListener("click", () => {
    nav.classList.remove("inactive");
});

hambCloseBtn.addEventListener("click", () => {
    nav.classList.add("inactive");
});