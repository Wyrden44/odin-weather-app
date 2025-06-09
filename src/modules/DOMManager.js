import LocationFormController from "./locationFormController";

export default class DOMManager {
    #locationFormController;
    #appController;

    constructor(appController) {
        this.#locationFormController = new LocationFormController(document.querySelector("#location-form"));
        this.#appController = appController;

        // fetch data on submit
        this.#locationFormController.submitButton.addEventListener("click", e => {
            e.preventDefault();
            let location = this.#locationFormController.getLocation();
            //this.#appController.getAndDisplayLocationData(location);
        });
    }
}