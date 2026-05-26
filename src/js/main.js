import "toastify-js/src/toastify.css";

import "../css/style.css";
import { initMobileMenu } from "./mobile-menu.js";
import { initScrollObserver } from "./observer.js";
import { initEmailSender } from "./email-sender.js";

function initHeaderScroll() {
    const header = document.querySelector(".header");
    if (!header) return;

    let ticking = false;

    const update = () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
        ticking = false;
    };

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        },
        { passive: true },
    );

    update();
}

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initScrollObserver();
    initHeaderScroll();
    initEmailSender();

    const yearEl = document.getElementById("copyright-year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
