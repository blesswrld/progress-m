import emailjs from "@emailjs/browser";
// Импортируем нашу функцию уведомлений
import { showNotification } from "./notifications.js";

export function initEmailSender() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const serviceID = "service_n0lglt9";
        const templateID = "template_e6p95e9";
        const publicKey = "VlUZjYSOEjkIVlqxS";

        submitButton.disabled = true;
        submitButton.textContent = "Отправка...";

        emailjs.sendForm(serviceID, templateID, this, publicKey).then(
            () => {
                // --- УСПЕХ ---
                showNotification("Ваша заявка успешно отправлена!", "success");
                form.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            },
            (err) => {
                // --- ОШИБКА ---
                showNotification("Произошла ошибка при отправке.", "error");
                console.error("EMAILJS FAILED...", err); // Оставляем ошибку в консоли для отладки

                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        );
    });
}
