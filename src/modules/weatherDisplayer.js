export default class WeatherDisplayer {
    #container;
    
    constructor(container) {
        this.#container = container;
    }

    displayData(location, data) {
        this.#container.textContent = "";
        
        this.displayLocation(location);
        this.displayTemperatureAndCondition(data.temperature, data.conditions, data.iconName);
        this.displaySupplementaryInformation(data.sensation, data.windSpeed, data.uvIndex, data.humidity, data.pressure);
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

    displaySupplementaryInformation(sensation, windSpeed, uvIndex, humidity, pressure) {
        const supplementaryContainer = document.createElement("div");
        supplementaryContainer.classList.add("supplementary-weather-info");

        const sensationElement = document.createElement("p");
        const descriptionSpan = document.createElement("span");
        descriptionSpan.classList.add("description");
        descriptionSpan.textContent = "Feels like: ";
        const valueSpan = document.createElement("span");
        valueSpan.classList.add("value");
        valueSpan.textContent = sensation + "°";
        sensationElement.appendChild(descriptionSpan);
        sensationElement.appendChild(valueSpan);

        const windSpeedElement = document.createElement("p");
        const windSpeedDescriptionSpan = document.createElement("span");
        windSpeedDescriptionSpan.classList.add("description");
        windSpeedDescriptionSpan.textContent = "Wind Speed: ";
        const windSpeedValueSpan = document.createElement("span");
        windSpeedValueSpan.classList.add("value");
        windSpeedValueSpan.textContent = windSpeed + " km/h";
        windSpeedElement.appendChild(windSpeedDescriptionSpan);
        windSpeedElement.appendChild(windSpeedValueSpan);

        const uvIndexElement = document.createElement("p");
        const uvIndexDescriptionSpan = document.createElement("span");
        uvIndexDescriptionSpan.classList.add("description");
        uvIndexDescriptionSpan.textContent = "UV Index: ";
        const uvIndexValueSpan = document.createElement("span");
        uvIndexValueSpan.classList.add("value");
        uvIndexValueSpan.textContent = uvIndex;
        uvIndexElement.appendChild(uvIndexDescriptionSpan);
        uvIndexElement.appendChild(uvIndexValueSpan);
        
        const humidityElement = document.createElement("p");
        const humidityDescriptionSpan = document.createElement("span");
        humidityDescriptionSpan.classList.add("description");
        humidityDescriptionSpan.textContent = "Humidity: ";
        const humidityValueSpan = document.createElement("span");
        humidityValueSpan.classList.add("value");
        humidityValueSpan.textContent = humidity + "%";
        humidityElement.appendChild(humidityDescriptionSpan);
        humidityElement.appendChild(humidityValueSpan);

        const pressureElement = document.createElement("p");
        const pressureDescriptionSpan = document.createElement("span");
        pressureDescriptionSpan.classList.add("description");
        pressureDescriptionSpan.textContent = "Pressure: ";
        const pressureValueSpan = document.createElement("span");
        pressureValueSpan.classList.add("value");
        pressureValueSpan.textContent = pressure + " hPa";
        pressureElement.appendChild(pressureDescriptionSpan);
        pressureElement.appendChild(pressureValueSpan);

        supplementaryContainer.appendChild(sensationElement);
        supplementaryContainer.appendChild(windSpeedElement);
        supplementaryContainer.appendChild(uvIndexElement);
        supplementaryContainer.appendChild(humidityElement);
        supplementaryContainer.appendChild(pressureElement);

        this.#container.appendChild(supplementaryContainer);
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