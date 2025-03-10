
//constants
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

//tells the right button what to do

rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length - 1){
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

//tells the left button what to do

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0){
        activeSlide = slides.length -1
    }

    setBgToBody()
    setActiveSlide()
})

//functions

setBgToBody();

// this functions tells the body to set the background image to the same as the active slide
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

//this function loops through the slide to be set as the active slide
function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"))
  slides[activeSlide].classList.add('active')
}
