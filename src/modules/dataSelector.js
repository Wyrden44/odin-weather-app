export default class DataSelector {
    static getTemperatureAndCondition(dataPackage) {
        // My must-haves for MVP: Temperature and current weather condition
        const temperature = dataPackage?.currentConditions?.temp ?? "Error: Temperature not available";
        const conditions = dataPackage?.currentConditions?.conditions ?? "Error: Conditions not available";
        
        return { temperature, conditions };
    }

    static getIconName(dataPackage) {
        // for displaying icons
        const iconName = dataPackage?.currentConditions?.icon ?? "Error: Icon not available";
        return { iconName }
    }

    static getSupplementaryInformation(dataPackage) {
        const sensation = dataPackage?.currentConditions?.feelslike ?? "Error: Sensation not available";
        const windSpeed = dataPackage?.currentConditions?.windspeed ?? "Error: Wind Speed not available";
        const uvIndex = dataPackage?.currentConditions?.uvindex ?? "Error: UV Index not available";
        const humidity = dataPackage?.currentConditions?.humidity ?? "Error: Humidity not available";
        const pressure = dataPackage?.currentConditions?.pressure ?? "Error: Pressure not available";
    
        return { sensation, windSpeed, uvIndex, humidity, pressure };
    }
}