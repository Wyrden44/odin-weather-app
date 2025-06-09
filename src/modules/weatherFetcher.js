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
            
            if (!response.ok) {
                let errorMessage;
                switch (response.status) {
                    case 400:
                        errorMessage = "City does not exist!";
                        break;
                    case 404:
                        errorMessage = "Not found. Check the URL or location name!";
                        break;
                    case 500:
                        errorMessage = "Server error. Please try again later!";
                        break;
                    default:
                        errorMessage = `Unexpected error occurred. Status: ${response.status} - ${response.statusText}`;
                }

                throw new Error(errorMessage);
            }

            const data = await response.json();
            return data;     
        } catch (error) {
            console.log("Error occurred when fetching data:", error);
            throw error;
        }
    }
}