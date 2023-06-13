const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Mostrar el primer slide al cargar la página
showSlide(currentIndex);

//BOTON DE SUBIR//
var backToTopBtn = document.getElementById("back-to-top-btn");
var navbar = document.querySelector(".navbar");
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }

    if (prevScrollpos > currentScrollPos) {
        navbar.classList.remove("hide");
    } else {
        navbar.classList.add("hide");
    }
    prevScrollpos = currentScrollPos;
};

backToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//CAMBIO IDIOMA