// function plusSlides(n) {
//     showSlides2(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides2(slideIndex = n);
// }

// function showSlides2(n) {
//     let i;
//     let slides2 = document.getElementsByClassName("mySlides2");
//     let dots2 = document.getElementsByClassName("dot-2");

//     if (n > slides2.length) {
//         slideIndex = 1
//     }
//     if (n < 2) {
//         slideIndex = slides2.length
//     }
//     for (i = 0; i < slides2.length; i++) {
//         slides2[i].style.display = "none";
//     }
//     for (i = 0; i < dots2.length; i++) {
//         dots2[i].className = dots2[i].className.replace(" active", "");
//     }
//     slides2[slideIndex - 1].style.display = "block";
// }
var slideWrapper = document.querySelector('.container');
var slides = document.querySelectorAll('.item');
var totalSlides = slides.length; // item의 갯수


var sliderWidth = slideWrapper.clientWidth; // container의 width
var slideIndex = 0;
var slider = document.querySelector('.slider');

slider.style.width = sliderWidth * totalSlides + 'px';


function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides) {
        slideIndex = 0;
    }
    slider.style.left = -(sliderWidth * slideIndex) + 'px';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});