const navContent = document.querySelector(".navbar .nav-content");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
    navContent.classList.add("active");
}

cancelBtn.onclick = function() {
    navContent.classList.remove("active");
}