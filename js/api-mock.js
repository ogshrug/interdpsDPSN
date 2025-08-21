// This is a mock API to simulate backend functionality
// In a real implementation, this would be replaced with actual server calls

const API = {
    // Sensor data
    getSensorData: function(sensorId) {
        // Simulate API call delay
        return new Promise((resolve) => {
            setTimeout(() => {
                // Mock data
                const data = {
                    "NB-4852-2023": {
                        moisture: 32,
                        temperature: 28,
                        ph: 5.1,
                        nitrogen: 180,
                        phosphorus: 45,
                        potassium: 210,
                        lastSync: "2023-07-15T10:30:00",
                        battery: 84,
                        signal: "strong"
                    },
                    "NB-4853-2023": {
                        moisture: 58,
                        temperature: 26,
                        ph: 6.2,
                        nitrogen: 220,
                        phosphorus: 60,
                        potassium: 180,
                        lastSync: "2023-07-15T11:15:00",
                        battery: 92,
                        signal: "strong"
                    },
                    "NB-4854-2023": {
                        moisture: 45,
                        temperature: 27,
                        ph: 5.8,
                        nitrogen: 200,
                        phosphorus: 50,
                        potassium: 195,
                        lastSync: "2023-07-15T09:45:00",
                        battery: 76,
                        signal: "moderate"
                    }
                };
                
                resolve(data[sensorId] || {
                    error: "Sensor not found"
                });
            }, 500);
        });
    },
    
    // Field data
    getFieldData: function(fieldId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Mock data
                const data = {
                    "field-1": {
                        name: "North Field",
                        size: 2.5,
                        location: { lat: 28.7041, lng: 77.1025 },
                        currentCrop: "Wheat",
                        plantingDate: "2023-05-10",
                        expectedHarvest: "2023-09-15",
                        soilHealth: 72,
                        moisture: 58,
                        nutrients: 84,
                        sensorId: "NB-4853-2023"
                    },
                    "field-2": {
                        name: "South Field",
                        size: 3.2,
                        location: { lat: 19.0760, lng: 72.8777 },
                        currentCrop: "Rice",
                        plantingDate: "2023-06-05",
                        expectedHarvest: "2023-10-10",
                        soilHealth: 65,
                        moisture: 32,
                        nutrients: 68,
                        sensorId: "NB-4852-2023"
                    },
                    "field-3": {
                        name: "East Field",
                        size: 1.8,
                        location: { lat: 22.5726, lng: 88.3639 },
                        currentCrop: "Maize",
                        plantingDate: "2023-04-20",
                        expectedHarvest: "2023-08-25",
                        soilHealth: 78,
                        moisture: 45,
                        nutrients: 91,
                        sensorId: "NB-4854-2023"
                    }
                };
                
                resolve(data[fieldId] || {
                    error: "Field not found"
                });
            }, 500);
        });
    },
    
    // Weather data
    getWeatherForecast: function(location) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Mock data
                const forecast = [
                    {
                        date: "2023-07-16",
                        condition: "sunny",
                        temperature: { min: 24, max: 32 },
                        precipitation: 0,
                        humidity: 65,
                        wind: 8
                    },
                    {
                        date: "2023-07-17",
                        condition: "partly-cloudy",
                        temperature: { min: 25, max: 33 },
                        precipitation: 10,
                        humidity: 70,
                        wind: 10
                    },
                    {
                        date: "2023-07-18",
                        condition: "rain",
                        temperature: { min: 23, max: 29 },
                        precipitation: 80,
                        humidity: 85,
                        wind: 15
                    },
                    {
                        date: "2023-07-19",
                        condition: "rain",
                        temperature: { min: 22, max: 28 },
                        precipitation: 90,
                        humidity: 90,
                        wind: 12
                    },
                    {
                        date: "2023-07-20",
                        condition: "cloudy",
                        temperature: { min: 24, max: 30 },
                        precipitation: 30,
                        humidity: 75,
                        wind: 8
                    }
                ];
                
                resolve(forecast);
            }, 500);
        });
    },
    
    // Crop suggestions
    getCropSuggestions: function(fieldId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Mock data
                const suggestions = {
                    "field-1": [
                        {
                            cropKey: "Wheat",
                            varietyKey: "HD-2967",
                            suitability: 92,
                            expectedYieldKey: "4.8 tons/ha",
                            waterRequirementKey: "Medium",
                            growingPeriodKey: "110-120 days"
                        },
                        {
                            cropKey: "Barley",
                            varietyKey: "RD-2552",
                            suitability: 85,
                            expectedYieldKey: "3.9 tons/ha",
                            waterRequirementKey: "Low",
                            growingPeriodKey: "100-110 days"
                        },
                        {
                            cropKey: "Mustard",
                            varietyKey: "Pusa Bold",
                            suitability: 78,
                            expectedYieldKey: "1.8 tons/ha",
                            waterRequirementKey: "Low",
                            growingPeriodKey: "110-130 days"
                        }
                    ],
                    "field-2": [
                        {
                            cropKey: "Rice",
                            varietyKey: "Pusa Basmati-1",
                            suitability: 88,
                            expectedYieldKey: "5.2 tons/ha",
                            waterRequirementKey: "High",
                            growingPeriodKey: "135-145 days"
                        },
                        {
                            cropKey: "Maize",
                            varietyKey: "DHM-117",
                            suitability: 75,
                            expectedYieldKey: "6.5 tons/ha",
                            waterRequirementKey: "Medium",
                            growingPeriodKey: "85-95 days"
                        },
                        {
                            cropKey: "Cotton",
                            varietyKey: "Bt Cotton",
                            suitability: 70,
                            expectedYieldKey: "2.2 tons/ha",
                            waterRequirementKey: "Medium",
                            growingPeriodKey: "160-180 days"
                        }
                    ],
                    "field-3": [
                        {
                            cropKey: "Maize",
                            varietyKey: "DHM-117",
                            suitability: 94,
                            expectedYieldKey: "7.2 tons/ha",
                            waterRequirementKey: "Medium",
                            growingPeriodKey: "85-95 days"
                        },
                        {
                            cropKey: "Soybean",
                            varietyKey: "JS-335",
                            suitability: 86,
                            expectedYieldKey: "2.8 tons/ha",
                            waterRequirementKey: "Medium",
                            growingPeriodKey: "95-105 days"
                        },
                        {
                            cropKey: "Groundnut",
                            varietyKey: "TAG-24",
                            suitability: 82,
                            expectedYieldKey: "2.5 tons/ha",
                            waterRequirementKey: "Medium",
                            growingPeriodKey: "110-120 days"
                        }
                    ]
                };
                
                resolve(suggestions[fieldId] || {
                    error: "Field not found"
                });
            }, 500);
        });
    },
    
    // Market prices
    getMarketPrices: function() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Mock data
                const prices = [
                    {
                        cropKey: "Wheat",
                        marketKey: "Delhi",
                        price: 2240,
                        unitKey: "quintal",
                        trend: "up",
                        change: 3.5
                    },
                    {
                        cropKey: "Rice",
                        marketKey: "Kolkata",
                        price: 3680,
                        unitKey: "quintal",
                        trend: "up",
                        change: 2.1
                    },
                    {
                        cropKey: "Maize",
                        marketKey: "Bangalore",
                        price: 1950,
                        unitKey: "quintal",
                        trend: "down",
                        change: -1.2
                    },
                    {
                        cropKey: "Cotton",
                        marketKey: "Mumbai",
                        price: 6250,
                        unitKey: "quintal",
                        trend: "up",
                        change: 4.8
                    },
                    {
                        cropKey: "Soybean",
                        marketKey: "Indore",
                        price: 4120,
                        unitKey: "quintal",
                        trend: "down",
                        change: -0.8
                    },
                    {
                        cropKey: "Mustard",
                        marketKey: "Jaipur",
                        price: 5340,
                        unitKey: "quintal",
                        trend: "up",
                        change: 1.5
                    }
                ];
                
                resolve(prices);
            }, 500);
        });
    }
};

// Make API available globally
window.API = API;