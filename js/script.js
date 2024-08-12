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