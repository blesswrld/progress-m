import Toastify from "toastify-js";

export function showNotification(message, type = "info") {
    let backgroundColor;
    let textColor = "#ffffff";

    switch (type) {
        case "success":
            backgroundColor = "var(--primary-color)";
            break;
        case "error":
            backgroundColor = "#dc3545";
            break;
        default:
            backgroundColor = "var(--dark-color)";
            break;
    }

    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: backgroundColor,
            color: textColor,
            "border-radius": "8px",
        },
        className: `toastify-notification toastify-notification--${type}`,
    }).showToast();
}
