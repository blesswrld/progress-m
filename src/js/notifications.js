import Toastify from "toastify-js";

// Создаем универсальную функцию для показа уведомлений
export function showNotification(message, type = "info") {
    let backgroundColor;

    // Выбираем цвет в зависимости от типа уведомления
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
        duration: 3000, // Уведомление исчезнет через 3 секунды
        close: true, // Показать крестик для закрытия
        gravity: "top", // Положение: "top" или "bottom"
        position: "right", // Расположение: "left", "center" или "right"
        stopOnFocus: true, // Останавливать таймер, если курсор на уведомлении
        style: {
            background: backgroundColor,
        },
    }).showToast();
}
