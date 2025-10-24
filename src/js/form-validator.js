import JustValidate from "just-validate";

function getErrorContainer(form, fieldSelector) {
    const field = form.querySelector(fieldSelector);
    if (!field) return null;
    return field.closest(".form-field").querySelector(".error-container");
}

export class FormValidator {
    constructor(formElement, options = {}) {
        this.form = formElement;
        this.validator = new JustValidate(this.form, {
            errorFieldCssClass: "is-invalid",
            errorLabelCssClass: "just-validate-error-label",
            validateBeforeSubmitting: true,
        });

        if (options.rules) {
            this.initValidationWithOptions(options.rules);
        } else {
            this.initDefaultValidation();
        }
    }

    initValidationWithOptions(rules) {
        rules.forEach((item) => {
            const errorsContainer = getErrorContainer(this.form, item.selector);
            if (errorsContainer) {
                this.validator.addField(item.selector, item.rules, {
                    errorsContainer,
                });
            }
        });
    }

    initDefaultValidation() {
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
