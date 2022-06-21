let slideIndex = 0;
autoSlides();

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
    const slides = document.getElementsByClassName('slide');
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

// Auto scroll slideshow
function autoSlides(){
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].classList.add('active');

    setTimeout(autoSlides, 5000);
}