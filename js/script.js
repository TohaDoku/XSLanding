// 1. Открытие и закрытие мобильного меню 
// Получаем элементы
var modal = document.getElementById("myModal");
var btn = document.querySelector(".header__mobile_menu");
var span = document.querySelector(".header__mobile_menu_close");

// Когда пользователь нажимает на кнопку, открывается модальное окно
btn.onclick = function() {
    modal.classList.add("active");
    span.classList.add("active");
    btn.classList.add("hidden");
}

// Когда пользователь нажимает на <span> (x), модальное окно закрывается
span.onclick = function() {
    modal.classList.remove("active");
    span.classList.remove("active");
    btn.classList.remove("hidden");
}

// 2. Слайдер для отзывов
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.reviews__slide img');
    let currentIndex = 2; // Индекс активного слайда
    const totalSlides = slides.length;

    const images = [
        './img/review.png',
        './img/logo.png',
        './img/boy.png',
        './img/review.png',
        './img/review.png'
    ];

    function updateSlides() {
        for (let i = 0; i < totalSlides; i++) {
            const index = (currentIndex + i - 2 + images.length) % images.length;
            slides[i].src = images[index];
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlides();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlides();
    }

    document.querySelector('.reviews__slider_next').addEventListener('click', nextSlide);
    document.querySelector('.reviews__slider_prev').addEventListener('click', prevSlide);

    updateSlides(); // Инициализация начальных изображений
});

// 3. Отображение текущего года в подвале сайта
document.getElementById('copyright').innerHTML = '&copy; 2012—' + new Date().getFullYear() + ', X-Solution, официальный сайт, все права защищены';

// 4. Отображение блока с мессенджерами
document.querySelector('.social-wrapper').addEventListener('click', function() {
    document.querySelector('.social-wrapper').style.display = 'none';
    document.querySelector('.social-icons').style.display = 'flex';
});

document.querySelector('.icons-close').addEventListener('click', function() {
    document.querySelector('.social-wrapper').style.display = 'flex';
    document.querySelector('.social-icons').style.display = 'none';
});