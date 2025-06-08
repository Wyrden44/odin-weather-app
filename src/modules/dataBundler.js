import WeatherFetcher from "./weatherFetcher";
import DataSelector from "./dataSelector";

export default class DataBundler {
    #weatherFetcher;

    constructor() {
        this.#weatherFetcher = new WeatherFetcher(
            "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
        	"UF9G2QFR2W3NDNWMS3HVQ8P2U"
        );
    }

    async getTemperatureAndCondition(location) {
        const weatherData = await this.#weatherFetcher.fetchData(location);
        return DataSelector.getTemperatureAndCondition(weatherData);
    }
}