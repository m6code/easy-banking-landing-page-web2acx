const mobileNavDropdown = document.querySelector("#navbarNav");
const navToggle = document.querySelector("#navbar-toggler");
const navOverlay = document.querySelector("#overlay");

navToggle.addEventListener("click", () => {
    mobileNavDropdown.classList.toggle("show");
    navOverlay.classList.toggle("show");

})
