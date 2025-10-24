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
                entry.target.classList.add("is-visible");

                if (entry.target.id === "about") {
                    initCounterAnimation();
                }

                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });
}
