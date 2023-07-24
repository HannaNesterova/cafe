// CAROUSEL OF THE FEEDBACKS

const carousel = document.querySelector('.carousel_feedback');
const arrowIcons = document.querySelectorAll('i');
let firstIcon = carousel.querySelectorAll('.box-img')[0];

let isDragStart = false, prevPageX, prevScrollLeft;

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (icon.classList.contains("left-arrow")) {
            carousel.scrollLeft -= 100;
        } else if (icon.classList.contains("right-arrow")) {
            carousel.scrollLeft += 100;
        }
    })
})


const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener('mouseover', dragging)
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragStop);

// BURGER
const body = document.querySelector('body');
const burger = document.querySelector('.header_burger');
const menu = document.querySelector('.header_menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('locked');
})

console.log(burger)