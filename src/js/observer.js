// Импортируем нашу функцию
import { initCounterAnimation } from "./counter.js";

export function initScrollObserver() {
    const sections = document.querySelectorAll(".fade-in-section");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Общая анимация для всех секций
                entry.target.classList.add("is-visible");

                // Если это наша секция со статистикой, запускаем счетчик
                if (entry.target.id === "stats") {
                    initCounterAnimation();
                }

                // Отключаем наблюдение после того, как элемент стал видимым
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });
}
