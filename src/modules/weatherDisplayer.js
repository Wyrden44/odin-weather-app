export default class WeatherDisplayer {
    #container;
    
    constructor(container) {
        this.#container = container;
    }

    displayData(location, data) {
        this.#container.textContent = "";
        
        this.displayLocation(location);
        this.displayTemperatureAndCondition(data.temperature, data.conditions);
    }

    displayLocation(location) {
        const locationContainer = document.createElement("div");
        mainContainer.classList.add("location-info");

        const locationElement = document.createElement("p");
        locationElement.id = "location";
        locationElement.textContent = location;

        locationContainer.appendChild(locationElement);
        this.#container.appendChild(locationContainer);
    }

    displayTemperatureAndCondition(temp, condition) {
        const mainContainer = document.createElement("div");
        mainContainer.classList.add("main-weather-info");

        const conditionElement = document.createElement("p");
        conditionElement.id = "condition";
        conditionElement.textContent = condition;

        const tempElement = document.createElement("p");
        tempElement.id = "temperature";
        tempElement.textContent = temp + "°C";

        mainContainer.appendChild(conditionElement);
        mainContainer.appendChild(tempElement);
        this.#container.appendChild(mainContainer);
    }
}