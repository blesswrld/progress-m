const animateCounter = (element, target, suffix, duration) => {
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;

    let startTime = null;

    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        const currentValue = Math.floor(progress * end);
        element.textContent = currentValue + (suffix || "");

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
};

export function initCounterAnimation() {
    const statsSection = document.getElementById("about");
    if (!statsSection) return;

    const counters = statsSection.querySelectorAll("strong[data-target]");

    counters.forEach((counter) => {
        const target = counter.dataset.target;
        const suffix = counter.dataset.suffix || "";
        const targetAsInt = parseInt(target, 10);

        if (!isNaN(targetAsInt) && String(targetAsInt) === target) {
            animateCounter(counter, target, suffix, 2000);
        } else {
            counter.textContent = target;
        }
    });
}
