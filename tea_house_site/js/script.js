const navLinks = document.querySelector("nav .nav-links");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const scrollBtn = document.querySelector(".scroll-btn a");
const nav = document.querySelector("nav");

menuBtn.onclick = function () {
    navLinks.classList.add("active");
}

cancelBtn.onclick = function () {
    navLinks.classList.remove("active");
}

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
        nav.classList.add("sticky");
    } else {
        scrollBtn.style.display = "none";
        nav.classList.remove("sticky");
    }
}

const cSwiper = new Swiper('.mySwiper', {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {},
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        760: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        980: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

const tSwiper = new Swiper('.tSwiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {},
});