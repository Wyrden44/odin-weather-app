import LocationFormController from "./locationFormController";
import WeatherDisplayer from "./weatherDisplayer";

export default class DOMManager {
    #locationFormController;
    #appController;
    #weatherDisplayer;

    constructor(appController) {
        this.#locationFormController = new LocationFormController(document.querySelector("#location-form"));
        this.#appController = appController;
        this.#weatherDisplayer = new WeatherDisplayer(document.querySelector(".weather-display"));

        // fetch data on submit
        this.#locationFormController.submitButton.addEventListener("click", e => {
            e.preventDefault();
            let location = this.#locationFormController.getLocation();
            this.#appController.getAndDisplayLocationData(location);
        });
    }

    displayWeatherData(data) {
        this.#weatherDisplayer.displayData(data);
    }

    showError(errorMessage) {
        const errorDialog = document.querySelector("dialog");
        const errorMessageElement = document.querySelector("#dialog-message");

        errorMessageElement.textContent = errorMessage;

        errorDialog.showModal();
    }

    showWeatherDataLoadingAnimation() {
        const loader = document.querySelector(".loader");

        loader.classList.remove("inactive");
        loader.classList.add("active");
    }

    hideWeatherDataLoadingAnimation() {
        const loader = document.querySelector(".loader");

        loader.classList.remove("active");
        loader.classList.add("inactive");
    }
}