import DataBundler from "./dataBundler";
import DOMManager from "./DOMManager";

export default class AppController {
    #dataBundler;
    #DOMManager;

    constructor() {
        this.#dataBundler = new DataBundler();
        this.#DOMManager = new DOMManager(this);
    }

    getAndDisplayLocationData(location) {
        this.#DOMManager.showWeatherDataLoadingAnimation();
        this.#dataBundler.getData(location)
            .then(data => {
                this.displayLocationData(data);
            })
            .catch(err => {
                this.showFetchingError(err);
            })
            .finally(() => {
                this.#DOMManager.hideWeatherDataLoadingAnimation();
            });
    }

    displayLocationData(data) {
        console.log("AppController displaying data:", data);
        this.#DOMManager.displayWeatherData(data);
    }

    showFetchingError(error) {
        this.#DOMManager.showError(error);
    }
}