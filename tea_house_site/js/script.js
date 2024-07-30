const navLinks = document.querySelector("nav .nav-links");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const scrollBtn = document.querySelector(".scroll-btn a");
const nav = document.querySelector("nav");

menuBtn.onclick = function() {
    navLinks.classList.add("active");
}

cancelBtn.onclick = function() {
    navLinks.classList.remove("active");
}