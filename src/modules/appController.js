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
        this.#dataBundler.getData(location)
            .then(data => {
                this.displayLocationData(location, data);
            })
            .catch(err => {
                this.showFetchingError(err);
            });
    }

    displayLocationData(location, data) {
        console.log("AppController displaying data:", data);
        this.#DOMManager.displayWeatherData(location, data);
    }

    showFetchingError(error) {
        this.#DOMManager.showError(error);
    }
}