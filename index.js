let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Dot image controls
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// Show slides
function showSlides(n) {
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if(n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].classList.add('active');
}