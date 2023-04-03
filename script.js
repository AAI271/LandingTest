const gap = 9;

const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

next.addEventListener("click", e => {
    carousel.scrollBy(width, 0);
    if (carousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    carousel.scrollBy(-(width), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


function reveal() {
    let reveals = document.querySelectorAll(".container");
    let header = document.querySelector("header");
    let welcome = document.querySelector("#welcome");

    if(welcome.getBoundingClientRect().top<-10){
        header.classList.add("scrolled")
    }
    else{
        header.classList.remove("scrolled")
    }
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("container-active");
        } else {
            reveals[i].classList.remove("container-active");
        }
    }
}
reveal()
window.addEventListener("scroll", reveal);








const whatsappBtn = document.getElementById("whatsapp-btn");
const panel = document.getElementById("panel");

whatsappBtn.addEventListener("click", () => {
    whatsappBtn.classList.toggle("active");
    panel.classList.toggle("active");
});
