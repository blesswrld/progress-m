import "toastify-js/src/toastify.css";

import "../css/style.css";
import { initMobileMenu } from "./mobile-menu.js";
import { initScrollObserver } from "./observer.js";
import { initEmailSender } from "./email-sender.js";

// Дополнительная логика для "прилипания" шапки при скролле
function initHeaderScroll() {
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// Инициализируем все скрипты после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initScrollObserver();
    initEmailSender();
    initHeaderScroll(); // Запускаем функцию
});
