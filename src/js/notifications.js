import Toastify from "toastify-js";

export function showNotification(message, type = "info") {
    let backgroundColor;

    switch (type) {
        case "success":
            backgroundColor = "linear-gradient(to right, #00b09b, #96c93d)";
            break;
        case "error":
            backgroundColor = "linear-gradient(to right, #ff5f6d, #ffc371)";
            break;
        default:
            backgroundColor = "linear-gradient(to right, #6a11cb, #2575fc)";
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
        },
    }).showToast();
}
