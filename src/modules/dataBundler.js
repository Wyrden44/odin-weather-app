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

    async getData(location) {
        const weatherData = await this.#weatherFetcher.fetchData(location);
        const { temperature, conditions } = this.getTemperatureAndCondition(weatherData);
        const { iconName } = this.getIconName(weatherData);

        return { temperature, conditions, iconName };
    }

    getTemperatureAndCondition(weatherData) {
        return DataSelector.getTemperatureAndCondition(weatherData);
    }

    getIconName(weatherData) {
        return DataSelector.getIconName(weatherData);
    }
}