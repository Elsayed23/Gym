let allBtns = document.querySelectorAll(".R-bottom .navigate button")
let about_btn = document.querySelector(".about_choose");
let choose_btn = document.querySelector(".choose_us")
let para1 = document.querySelector(".for_about")
let para2 = document.querySelector(".for_choose_us")

allBtns.forEach((ele) => {
    ele.onclick = function () {
        allBtns.forEach((e) => {
            e.classList.remove("active")
        })
        this.classList.add("active")
    }
})


choose_btn.addEventListener("click", () => {
    para2.style.display = "block";
    para1.style.display = "none";
})
about_btn.addEventListener("click", () => {
    para2.style.display = "none";
    para1.style.display = "block";
})



let bars = document.querySelector(".hamburger svg")
let X_color = document.querySelector(".line")
let cenC = document.querySelector(".hamburger svg .C")
let line_top = document.querySelector(".line-top-bottom")
let Svg = document.querySelector(".hamburger input + svg")
let nav = document.querySelector(".nav-b");


bars.addEventListener("click", () => {
    nav.classList.toggle("showNav");
    X_color.classList.toggle("X-color")
    Svg.classList.toggle("rotSVG")
    line_top.classList.toggle("line_T")
    cenC.classList.toggle("cen")
})

let scrollbtn = document.getElementById("to_top");


window.addEventListener("scroll", () => {
    if (window.scrollY >= 550) {
        scrollbtn.style.right = "15px";
    } else {
        scrollbtn.style.right = "-100px";
    };
});

scrollbtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

let D_buttons = document.querySelectorAll(".D-row button")

D_buttons.forEach((ele) => {
    ele.addEventListener("click", function () {
        D_buttons.forEach((ele) => {
            ele.classList.remove("active")
        })
        this.classList.add("active")
    })
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    speed: 1500,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
    },

});
