let errors = [];

window.addEventListener("load", () => {
    const form = document.getElementById("logInForm");

    form.addEventListener("submit", (event) => {

        errors = [];
        clearValidations();

        validateInput("email", [
            [validator.isEmail, "Email inválido"],
        ]);
        validateInput("password", [
            [validator.isLength, { min: 8 }, "La contraseña debe tener como mínimo 8 caracteres"],
        ]);

        if (checkErrors()) {
            event.preventDefault();
        }
    });
});

function clearValidations() {
    const arrayInputs = document.getElementsByClassName("validate");
    const arrayFeedbacks = document.getElementsByClassName("feedback");

    for (const input of arrayInputs) {
        input.classList.remove("is-invalid", "is-valid");
    }
    for (const feedback of arrayFeedbacks) {
        feedback.classList.remove("alert", "alert-danger");
        feedback.innerHTML = "";
    }
}

function validateInput(inputId, validations) {
    const input = document.getElementById(inputId);

    let foundErrors = false;
    for (const validation of validations) {
        const validationFunction = validation[0];
        const errorMsg = validation[validation.length - 1];
        const validationOptions =
            validation.length > 2 ? validation[1] : undefined;
        let inputValue;
        switch (input.type) {
            case "checkbox": {
                inputValue = input.checked;
                break;
            }
            default:
                inputValue = input.value;
        }
        if (!validationFunction(inputValue, validationOptions)) {
            const error = {
                inputId,
                msg: errorMsg,
            };
            errors.push(error);
            foundErrors = true;
        }
    }
    if (!foundErrors) {
        input.classList.add("is-valid");
    }
}

function checkErrors() {
    if (errors.length > 0) {
        errors.forEach((e) => {
            const feedbackId = e.inputId + "Feedback";
            const feedbackDiv = document.getElementById(feedbackId);
            const input = document.getElementById(e.inputId);
            input.classList.add("is-invalid");
            feedbackDiv.innerHTML += `<li>${e.msg}</li>`;
            feedbackDiv.classList.add("alert", "alert-danger");
        });
        return true;
    }

    return false;
}

function isTrue(value) {
    return value;
}
