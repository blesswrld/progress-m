import "toastify-js/src/toastify.css";

import "../css/style.css";
import { initMobileMenu } from "./mobile-menu.js";
import { initScrollObserver } from "./observer.js";
import { initEmailSender, initReviewFormSender } from "./email-sender.js";

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

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initScrollObserver();
    initHeaderScroll();

    initEmailSender();
    initReviewFormSender();
});
