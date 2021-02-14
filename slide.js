function plusSlides(n) {
    showSlides2(slideIndex += n);
}

function currentSlide(n) {
    showSlides2(slideIndex = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    let dots2 = document.getElementsByClassName("dot-2");

    if (n > slides2.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex - 1].style.display = "block";
    dots2[slideIndex - 1].className += " active";
}
// end