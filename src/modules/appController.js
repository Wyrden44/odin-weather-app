import WeatherFetcher from "./weatherFetcher";

export default class AppController {
    #weatherFetcher;

    constructor() {
        this.#weatherFetcher = new WeatherFetcher(
            "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
        	"UF9G2QFR2W3NDNWMS3HVQ8P2U"
        );
        //this.#weatherFetcher.fetchData("Berlin");
    }
}