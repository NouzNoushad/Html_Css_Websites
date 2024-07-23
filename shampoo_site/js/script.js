const navContent = document.querySelector(".navbar .nav-content");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const scrollBtn = document.querySelector(".scroll-btn a");
const nav = document.querySelector("nav");

menuBtn.onclick = function() {
    navContent.classList.add("active");
}

cancelBtn.onclick = function() {
    navContent.classList.remove("active");
}

window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        scrollBtn.style.display = "block";
        nav.classList.add("sticky");
    }else{
        scrollBtn.style.display = "none";
        nav.classList.remove("sticky");
    }
}