export default class LocationFormController {
    #form;
    #locationInput;
    #submitButton;

    constructor(formElement) {
        this.#form = formElement;
        this.#locationInput = this.#form.querySelector("input");
        this.#submitButton = this.#form.querySelector("button");
    }

    getLocation() {
        return this.#locationInput.value;
    }

    clear() {
        this.#form.reset();
    }

    get submitButton() {
        return this.#submitButton;
    }
}