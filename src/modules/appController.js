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
        this.#dataBundler.getTemperatureAndCondition(location)
            .then(data => {
                this.displayLocationData(data);
            })
            .catch(err => {
                this.showFetchingError(err);
            });
    }

    displayLocationData(data) {
        console.log("AppController displaying data:", data);
    }

    showFetchingError(error) {
        console.log("AppController showing error:", error);
    }
}