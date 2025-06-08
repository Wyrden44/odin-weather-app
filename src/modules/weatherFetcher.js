export default class WeatherFetcher {
    #url;
    #apiKey;

    constructor(url, apiKey) {
        this.#url = url;
        this.#apiKey = apiKey;
    }

    buildUrl(location) {
        let url = this.#url + location + "?";
        url += "key=" + this.#apiKey;
        return url;
    }

    async fetchData(location) {
        try {
            const response = await fetch(this.buildUrl(location), { method: "GET", mode: "cors" });
            const data = await response.json();            
        } catch (error) {
            console.log("Error occurred when fetching data:", error);
            return error;
        }
        
        return data;
    }
}