export function initMobileMenu() {
    const burgerBtn = document.getElementById("burger-menu");
    const mobileNav = document.getElementById("mobile-nav");
    const closeBtn = document.getElementById("close-btn");
    const navLinks = mobileNav.querySelectorAll("a");

    burgerBtn.addEventListener("click", () => {
        mobileNav.classList.add("is-open");
        document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        document.body.style.overflow = "";
    });

    // Закрывать меню при клике на ссылку (для одностраничника)
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("is-open");
            document.body.style.overflow = "";
        });
    });
}
