const navBar = document.querySelector(".nav-bar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const scrollBtn = document.querySelector(".scroll-btn a");
const header = document.querySelector("header");

menuBtn.onclick = function () {
    navBar.classList.add("active");
}

cancelBtn.onclick = function () {
    navBar.classList.remove("active");
}

window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        scrollBtn.style.display = "block";
        header.classList.add("sticky");
    }else {
        scrollBtn.style.display = "none";
        header.classList.remove("sticky");
    }
}

// Swiper

const swiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {}
});