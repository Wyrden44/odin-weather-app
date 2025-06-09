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
}