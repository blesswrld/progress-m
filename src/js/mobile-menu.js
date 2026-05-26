export function initMobileMenu() {
    const burgerBtn = document.getElementById("burger-menu");
    const mobileNav = document.getElementById("mobile-nav");
    const closeBtn = document.getElementById("close-btn");

    if (!burgerBtn || !mobileNav || !closeBtn) return;

    const navLinks = mobileNav.querySelectorAll("a");
    let previousFocus = null;

    const setMenuOpen = (isOpen) => {
        mobileNav.classList.toggle("is-open", isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "";
        burgerBtn.setAttribute("aria-expanded", String(isOpen));
        mobileNav.setAttribute("aria-hidden", String(!isOpen));
        burgerBtn.setAttribute(
            "aria-label",
            isOpen ? "Закрыть меню" : "Открыть меню",
        );

        if (isOpen) {
            previousFocus = document.activeElement;
            closeBtn.focus();
        } else if (previousFocus instanceof HTMLElement) {
            previousFocus.focus();
            previousFocus = null;
        }
    };

    burgerBtn.addEventListener("click", () => setMenuOpen(true));
    closeBtn.addEventListener("click", () => setMenuOpen(false));

    navLinks.forEach((link) => {
        link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && mobileNav.classList.contains("is-open")) {
            setMenuOpen(false);
        }
    });
}
