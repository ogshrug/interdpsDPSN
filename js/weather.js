document.addEventListener('DOMContentLoaded', function() {
    const locationSelector = document.getElementById('location');
    const weatherCardsContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-5.gap-4');

    const fieldIdMapping = {
        'north-field': 'field-1',
        'south-field': 'field-2',
        'east-field': 'field-3'
    };

    function getWeatherIcon(weatherCode) {
        if (weatherCode === 0) return '☀️';
        if (weatherCode >= 1 && weatherCode <= 3) return '⛅';
        if (weatherCode === 45 || weatherCode === 48) return '🌫️';
        if (weatherCode >= 51 && weatherCode <= 57) return '💧';
        if (weatherCode >= 61 && weatherCode <= 67) return '🌧️';
        if (weatherCode >= 71 && weatherCode <= 77) return '🌨️';
        if (weatherCode >= 80 && weatherCode <= 86) return '🌦️';
        if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) return '⛈️';
        return '☀️'; // Default icon
    }

    async function fetchWeather(fieldValue) {
        try {
            const fieldId = fieldIdMapping[fieldValue];
            const fieldData = await API.getFieldData(fieldId);

            if (fieldData.error) {
                console.error('Error getting field data:', fieldData.error);
                return;
            }

            const { lat, lng } = fieldData.location;
            const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max&timezone=auto&forecast_days=5`;

            const response = await fetch(apiUrl);
            const weatherData = await response.json();

            updateWeatherUI(weatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    function updateWeatherUI(weatherData) {
        const daily = weatherData.daily;
        const weatherCards = weatherCardsContainer.children;

        for (let i = 0; i < 5; i++) {
            const card = weatherCards[i];
            if (!card) continue;

            const dayData = {
                date: new Date(daily.time[i]),
                weatherCode: daily.weathercode[i],
                tempMax: Math.round(daily.temperature_2m_max[i]),
                tempMin: Math.round(daily.temperature_2m_min[i]),
                precipitation: daily.precipitation_probability_max[i], // Using probability for precipitation percentage
                wind: Math.round(daily.windspeed_10m_max[i]),
            };

            // Since humidity is not directly available in the daily data from this API call, I will remove it or keep it as is.
            // For now, I will update the fields that I have data for.

            card.querySelector('.text-5xl').textContent = getWeatherIcon(dayData.weatherCode);
            card.querySelector('.text-xl.font-bold').textContent = `${dayData.tempMax}°C`;
            card.querySelector('.text-sm.text-gray-600').textContent = `${dayData.tempMin}°C`;

            const details = card.querySelectorAll('.flex.justify-between.text-sm span:last-child');
            if(details.length === 3) {
                details[0].textContent = `${dayData.precipitation}%`;
                // details[1] is humidity, which I don't have.
                details[2].textContent = `${dayData.wind} km/h`;
            }

            // Update day label
            const dayLabel = card.querySelector('h3');
            if (i === 0) {
                dayLabel.textContent = 'Today';
            } else if (i === 1) {
                dayLabel.textContent = 'Tomorrow';
            } else {
                dayLabel.textContent = dayData.date.toLocaleDateString('en-US', { weekday: 'short' });
            }
        }
    }

    locationSelector.addEventListener('change', (event) => {
        const selectedFieldId = event.target.value;
        fetchWeather(selectedFieldId);
    });

    // Initial load
    if(locationSelector.value) {
        fetchWeather(locationSelector.value);
    }
});
