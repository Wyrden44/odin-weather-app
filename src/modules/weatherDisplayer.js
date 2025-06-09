export default class WeatherDisplayer {
    #container;
    
    constructor(container) {
        this.#container = container;
    }

    displayData(location, data) {
        this.#container.textContent = "";
        
        this.displayLocation(location);
        this.displayTemperatureAndCondition(data.temperature, data.conditions, data.iconName);
    }

    displayLocation(location) {
        const locationContainer = document.createElement("div");
        locationContainer.classList.add("location-info");

        const locationElement = document.createElement("p");
        locationElement.id = "location";
        locationElement.textContent = location;

        locationContainer.appendChild(locationElement);
        this.#container.appendChild(locationContainer);
    }

    displayTemperatureAndCondition(temp, condition, iconName) {
        const mainContainer = document.createElement("div");
        mainContainer.classList.add("main-weather-info");

        // display icon
        const iconElement = this.getIcon(iconName);
        iconElement.classList.add("weather-icon");

        const conditionElement = document.createElement("p");
        conditionElement.id = "condition";
        conditionElement.textContent = condition;

        const tempElement = document.createElement("p");
        tempElement.id = "temperature";
        tempElement.textContent = temp;

        mainContainer.appendChild(iconElement);
        mainContainer.appendChild(tempElement);
        mainContainer.appendChild(conditionElement);
        this.#container.appendChild(mainContainer);
    }

    getIcon(iconName) {
        // creates a weather icon element
        const icon = document.createElement("i");
        icon.classList.add("wi");
        switch (iconName) {
            case "snow":
                icon.classList.add("wi-snow");
                break;
            case "rain":
                icon.classList.add("wi-rain");
                break;
            case "fog":
                icon.classList.add("wi-fog");
                break;
            case "wind":
                icon.classList.add("wi-strong-wind");
                break;
            case "cloudy":
                icon.classList.add("wi-cloud");
                break;
            case "partly-cloudy-day":
                icon.classList.add("wi-day-cloudy");
                break;
            case "partly-cloudy-night":
                icon.classList.add("wi-night-alt-cloudy");
                break;
            case "clear-day":
                icon.classList.add("wi-day-sunny");
                break;
            case "clear-night":
                icon.classList.add("wi-night-clear");
                break;
            default:
                icon.classList.add("wi-cloud");
                break;
        }
        return icon;
    }
}