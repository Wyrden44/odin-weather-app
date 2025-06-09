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
        const { resolvedLocation } = this.getLocation(weatherData);
        let { temperature, conditions } = this.getTemperatureAndCondition(weatherData);
        const { iconName } = this.getIconName(weatherData);
        let { sensation, windSpeed, uvIndex, humidity, pressure } = DataSelector.getSupplementaryInformation(weatherData);

        // Fahrenheit to Celcius (one decimal)
        temperature = Math.round((temperature-32) * (5/9) * 10) / 10;
        sensation = Math.round((sensation-32) * (5/9) * 10) / 10;

        return { resolvedLocation, temperature, conditions, iconName, sensation, windSpeed, uvIndex, humidity, pressure };
    }

    getTemperatureAndCondition(weatherData) {
        return DataSelector.getTemperatureAndCondition(weatherData);
    }

    getIconName(weatherData) {
        return DataSelector.getIconName(weatherData);
    }

    getLocation(weatherData) {
        return DataSelector.getLocation(weatherData);
    }
}