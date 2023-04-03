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






//process
let stepItems = document.querySelectorAll('.step-item');
let stepWidth = document.querySelectorAll('.step')[0].offsetWidth;
console.log(stepItems[0])
console.log(stepItems[0].offsetWidth)
let numSteps = stepItems.length - 1;

function jumpToStep(step) {
    document.querySelector('.steps').style.left = -(step * stepWidth) + 'px';
    document.querySelector('.step-item.active').classList.toggle('active');
    document.querySelector('.step-item[data-step="'+ step +'"]').classList.toggle('active');
}

document.querySelectorAll('a[data-step]').forEach(link => {
    link.addEventListener('click', function(e) {
        jumpToStep(this.dataset.step);
    });
});

document.addEventListener('keydown', function(e) {
    e.preventDefault(); // prevent the default action (scroll / move caret)
    let activeStep = document.querySelector('.step-item.active').dataset.step;
    switch(e.which) {
        case 37: // left
            console.log(activeStep);
            if (activeStep > 0) {
                jumpToStep(activeStep - 1);
                return;
            }

        case 39: // right
            if (activeStep < numSteps) {
                jumpToStep(parseInt(activeStep) + 1);
                return;
            }

        default: return; // exit this handler for other keys
    }
});

const whatsappBtn = document.getElementById("whatsapp-btn");
const panel = document.getElementById("panel");

whatsappBtn.addEventListener("click", () => {
    whatsappBtn.classList.toggle("active");
    panel.classList.toggle("active");
});
