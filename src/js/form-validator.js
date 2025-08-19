import JustValidate from "just-validate";

// Вспомогательная функция для поиска контейнера
function getErrorContainer(form, fieldSelector) {
    return form
        .querySelector(fieldSelector)
        .closest(".form-field")
        .querySelector(".error-container");
}

export class FormValidator {
    constructor(formElement) {
        this.form = formElement;
        this.validator = new JustValidate(this.form, {
            errorFieldCssClass: "is-invalid",
            errorLabelCssClass: "just-validate-error-label",
            validateBeforeSubmitting: true,
        });

        this.initValidation();
    }

    initValidation() {
        this.validator
            .addField(
                "#user_name",
                [
                    {
                        rule: "required",
                        errorMessage: "Пожалуйста, введите ваше имя.",
                    },
                ],
                { errorsContainer: getErrorContainer(this.form, "#user_name") }
            )
            .addField(
                "#user_phone",
                [
                    {
                        rule: "required",
                        errorMessage: "Пожалуйста, введите ваш телефон.",
                    },
                    {
                        rule: "customRegexp",
                        value: /^((\+7|7|8)+([0-9() -]){10,12})$/,
                        errorMessage: "Введите корректный номер телефона.",
                    },
                ],
                { errorsContainer: getErrorContainer(this.form, "#user_phone") }
            )
            .addField(
                "#user_email",
                [
                    {
                        rule: "required",
                        errorMessage: "Пожалуйста, введите ваш Email.",
                    },
                    {
                        rule: "email",
                        errorMessage: "Введите корректный email адрес.",
                    },
                ],
                { errorsContainer: getErrorContainer(this.form, "#user_email") }
            );
    }

    onSuccess(callback) {
        this.validator.onSuccess(callback);
    }
}
