let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItems = document.querySelectorAll(".image-item");

let startSlider = 0;
let endSlider = (imgItems.length - 1) * 100;

const slideRight = () => {
    if (startSlider > -endSlider + 100) {
        startSlider -= 100;
    } else {
        startSlider = 0;  // Reset to the first slide
    }
    imgItems.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
}

const slideLeft = () => {
    if (startSlider < 0) {
        startSlider += 100;
    } else {
        startSlider = -endSlider + 100;  // Reset to the last slide
    }
    imgItems.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
}

slideBtnLeft.addEventListener("click", slideLeft);
slideBtnRight.addEventListener("click", slideRight);

// Auto slide
setInterval(slideRight, 3000);  // Slide every 3 seconds


document.getElementById("back-to-top").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
