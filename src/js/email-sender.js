import emailjs from "@emailjs/browser";
import { showNotification } from "./notifications.js";
import { FormValidator } from "./form-validator.js";

export function initEmailSender() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const validator = new FormValidator(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

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
                    showNotification(
                        "Ваша заявка успешно отправлена!",
                        "success"
                    );
                    form.reset();
                },
                (err) => {
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

export function initReviewFormSender() {
    const form = document.getElementById("review-form");
    if (!form) return;

    const validator = new FormValidator(form, {
        rules: [
            {
                selector: "#review_user_name",
                rules: [
                    {
                        rule: "required",
                        errorMessage: "Пожалуйста, введите ваше имя.",
                    },
                ],
            },
            {
                selector: "#review_message",
                rules: [
                    {
                        rule: "required",
                        errorMessage: "Пожалуйста, напишите ваш отзыв.",
                    },
                ],
            },
        ],
    });

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

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
                    showNotification("Спасибо за ваш отзыв!", "success");
                    form.reset();
                },
                (err) => {
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
