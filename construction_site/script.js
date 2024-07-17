const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const header = document.querySelector("header");
const scrollBtn = document.querySelector(".scroll-button a");


menuBtn.onclick = function () {
    navBar.classList.add("active");
    scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function () {
    navBar.classList.remove("active");
    scrollBtn.style.pointerEvents = "auto";
}

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        header.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        header.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}