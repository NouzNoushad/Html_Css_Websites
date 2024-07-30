const navLinks = document.querySelector("nav .nav-links");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const scrollBtn = document.querySelector(".scroll-btn a");

menuBtn.onclick = function() {
    navLinks.classList.add("active");
}

cancelBtn.onclick = function() {
    navLinks.classList.remove("active");
}

window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        scrollBtn.style.display = "block";
    }else{
        scrollBtn.style.display = "none";
    }
}