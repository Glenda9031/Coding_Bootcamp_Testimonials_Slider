const testimonialWrapper = document.querySelector('.testimonials');
const testimonials = document.querySelectorAll('.testimonial');
const buttonGroup = document.querySelector('.buttons');
const buttonPrevious = document.getElementById('slider-button-previous');
const buttonNext = document.getElementById('slider-button-next');
const picture = document.querySelectorAll('.testimonial-picture');

function getPhotoBottomPosition(slideNum) {
    return pictures[slideNum].getBoundingClientRect().bottom;
}

function getPhotoBottomPosition(slideNum) {
    return pictures[slideNum].getBoundingClientRect().left;
}

let currentSlide = 0;
let maxSlides = testimonials.length;

function transitionSlide() {
    testimonialWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function resizeUpdate() {
    if (document.body.offsetWidth >= 576) {
        buttonGroup.style.left = 'calc(' + getPhotoLeftPosition(currentSlide) + 'px + 2vw + 1rem)';
        buttonGroup.style.top = getPhotoBottomPosition(currentSlide) - buttonGroup.getBoundingClientRect().height / 2 + 'px';
    } else {
        buttonGroup.style.left = 0;
        buttonGroup.style.top = getPhotoBottomPosition(currentSlide) - buttonGroup.getBoundingClientRect().height / 2 + 'px';
    }
}

buttonPrevious.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 < 0  ? maxSlides - 1 : currentSlide - 1);
    transitionSlide();
}, false);

buttonNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1 === maxSlides ? 0 : currentSlide + 1);
    transitionSlide();
}, false);

window.addEventListener('load', resizeUpdate, false);
window.addEventListener('resize', resizeUpdate, false);

resizeUpdate();

