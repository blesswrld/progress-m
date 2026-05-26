import emailjs from "@emailjs/browser";
import { showNotification } from "./notifications.js";
import { FormValidator } from "./form-validator.js";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function isEmailJsConfigured() {
    return Boolean(serviceID && templateID && publicKey);
}

function handleFormSubmit(form, submitButton, messages) {
    const originalButtonText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Отправка...";

    emailjs
        .sendForm(serviceID, templateID, form, publicKey)
        .then(
            () => {
                showNotification(messages.success, "success");
                form.reset();
            },
            (err) => {
                showNotification(messages.error, "error");
                console.error("EMAILJS FAILED...", err);
            },
        )
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        });
}

export function initEmailSender() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    if (!isEmailJsConfigured()) {
        console.warn(
            "EmailJS: задайте VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID и VITE_EMAILJS_PUBLIC_KEY в .env",
        );
        return;
    }

    const validator = new FormValidator(form);
    const submitButton = form.querySelector('button[type="submit"]');

    validator.onSuccess((event) => {
        event.preventDefault();
        handleFormSubmit(form, submitButton, {
            success: "Ваша заявка успешно отправлена!",
            error: "Произошла ошибка при отправке.",
        });
    });
}
