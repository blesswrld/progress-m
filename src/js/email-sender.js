import emailjs from "@emailjs/browser";
// Импортируем нашу функцию уведомлений
import { showNotification } from "./notifications.js";
import { FormValidator } from "./form-validator.js"; // Импортируем наш класс

export function initEmailSender() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const validator = new FormValidator(form); // Создаем экземпляр валидатора
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    // Вешаем обработчик на успешную валидацию
    validator.onSuccess((event) => {
        event.preventDefault();

        const serviceID = "service_n0lglt9";
        const templateID = "template_e6p95e9";
        const publicKey = "VlUZjYSOEjkIVlqxS";

        submitButton.disabled = true;
        submitButton.textContent = "Отправка...";

        emailjs
            .sendForm(serviceID, templateID, form, publicKey)
            .then(
                () => {
                    // --- УСПЕХ ---
                    showNotification(
                        "Ваша заявка успешно отправлена!",
                        "success"
                    );
                    form.reset();
                },
                (err) => {
                    // --- ОШИБКА ---
                    showNotification("Произошла ошибка при отправке.", "error");
                    console.error("EMAILJS FAILED...", err);
                }
            )
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            });
    });
}
