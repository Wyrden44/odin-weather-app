import DataBundler from "./dataBundler";

export default class AppController {
    #dataBundler;

    constructor() {
        this.#dataBundler = new DataBundler();
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