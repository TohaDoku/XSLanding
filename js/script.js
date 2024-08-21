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
    document.querySelector('.social-wrapper').style.display = 'none';
    document.querySelector('.social-icons').style.display = 'none';
    document.querySelector('.arrow-up').style.display = 'none';
    document.querySelector('body').style.overflow = 'hidden';
}

// Когда пользователь нажимает на <span> (x), модальное окно закрывается
span.onclick = function() {
    modal.classList.remove("active");
    span.classList.remove("active");
    btn.classList.remove("hidden");
    document.querySelector('.social-wrapper').style.display = 'flex';
    document.querySelector('.arrow-up').style.display = 'flex';
    document.querySelector('body').style.overflow = 'unset';
}

// Закрытие модального окна при нажатии на ссылки
var modalLinks = document.querySelectorAll(".modal__link_go");

modalLinks.forEach(function(modalLink) {
    modalLink.onclick = function() {
        modal.classList.remove("active");
        span.classList.remove("active");
        btn.classList.remove("hidden");
        document.querySelector('body').style.overflow = 'unset';
    };
});

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

// 5. Появление скрола вверх
document.addEventListener('DOMContentLoaded', () => {
    const socialWrapper = document.querySelector('.social-wrapper');
    const servicesBigCard = document.querySelector('.services__big_card');
    const arrowUp = document.querySelector('.arrow-up');

    function checkPosition() {
        const servicesBigCardPosition = servicesBigCard.getBoundingClientRect();
        
        if (servicesBigCardPosition.top <= window.innerHeight) {
            socialWrapper.style.display = 'none';
            document.querySelector('.social-icons').style.display = 'none';
            arrowUp.style.display = 'flex';
        } else {
            socialWrapper.style.display = 'flex';
            arrowUp.style.display = 'none';
        }
    }

    // Добавляем функцию для плавного скролла вверх при нажатии на arrowUp
    arrowUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0, // Прокручиваем страницу в начало
            behavior: 'smooth' // Плавная прокрутка
        });
    });

    
    window.addEventListener('scroll', checkPosition);
});

// 6. Плавный скролл по якорным ссылкам
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const offset = 75;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

