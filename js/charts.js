document.addEventListener('DOMContentLoaded', function() {
    let soilChart, nutrientsChart, temperatureChart, moistureChart;

    function createCharts(lang) {
        const currentTranslations = translations[lang] || translations.en;

        // Destroy existing charts if they exist
        if (soilChart) soilChart.destroy();
        if (nutrientsChart) nutrientsChart.destroy();
        if (temperatureChart) temperatureChart.destroy();
        if (moistureChart) moistureChart.destroy();

        // Soil Health Chart
        const soilCtx = document.getElementById('soilChart').getContext('2d');
        soilChart = new Chart(soilCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(month => currentTranslations[month] || month),
                datasets: [{
                    label: currentTranslations['Field #1'] || 'Field #1',
                    data: [65, 68, 70, 72, 74, 72],
                    borderColor: 'rgb(43, 147, 72)',
                    backgroundColor: 'rgba(43, 147, 72, 0.1)',
                    tension: 0.3,
                    fill: true
                }, {
                    label: currentTranslations['Field #2'] || 'Field #2',
                    data: [70, 68, 65, 60, 55, 50],
                    borderColor: 'rgb(214, 40, 40)',
                    backgroundColor: 'rgba(214, 40, 40, 0.1)',
                    tension: 0.3,
                    fill: true
                }, {
                    label: currentTranslations['Field #3'] || 'Field #3',
                    data: [60, 65, 68, 70, 75, 78],
                    borderColor: 'rgb(255, 158, 27)',
                    backgroundColor: 'rgba(255, 158, 27, 0.1)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: currentTranslations['Soil Health Trends'] || 'Soil Health Trends',
                        font: { size: 16, family: '"Poppins", sans-serif' }
                    },
                    legend: { position: 'bottom' }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 40,
                        max: 100,
                        title: {
                            display: true,
                            text: currentTranslations['Health Index'] || 'Health Index',
                            font: { size: 12, family: '"Poppins", sans-serif' }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: currentTranslations['Month'] || 'Month',
                            font: { size: 12, family: '"Poppins", sans-serif' }
                        }
                    }
                }
            }
        });

        // Nutrients Chart
        const nutrientsCtx = document.getElementById('nutrientsChart').getContext('2d');
        nutrientsChart = new Chart(nutrientsCtx, {
            type: 'radar',
            data: {
                labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'Iron', 'Zinc', 'Manganese'].map(n => currentTranslations[n] || n),
                datasets: [{
                    label: currentTranslations['Field #1'] || 'Field #1',
                    data: [72, 60, 84, 80, 40, 65],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }, {
                    label: currentTranslations['Optimal'] || 'Optimal',
                    data: [70, 70, 70, 70, 70, 70],
                    backgroundColor: 'rgba(43, 147, 72, 0.2)',
                    borderColor: 'rgb(43, 147, 72)',
                    pointBackgroundColor: 'rgb(43, 147, 72)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(43, 147, 72)'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: currentTranslations['Nutrient Balance'] || 'Nutrient Balance',
                        font: { size: 16, family: '"Poppins", sans-serif' }
                    },
                    legend: { position: 'bottom' }
                }
            }
        });

        // Temperature Chart
        const temperatureCtx = document.getElementById('temperatureChart').getContext('2d');
        temperatureChart = new Chart(temperatureCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => currentTranslations[day] || day),
                datasets: [{
                    label: currentTranslations['Soil Temperature (°C)'] || 'Soil Temperature (°C)',
                    data: [22, 23, 24, 23, 25, 26, 25],
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: currentTranslations['7-Day Soil Temperature'] || '7-Day Soil Temperature',
                        font: { size: 16, family: '"Poppins", sans-serif' }
                    },
                    legend: { position: 'bottom' }
                },
                scales: { y: { beginAtZero: false } }
            }
        });

        // Moisture Chart
        const moistureCtx = document.getElementById('moistureChart').getContext('2d');
        moistureChart = new Chart(moistureCtx, {
            type: 'bar',
            data: {
                labels: ['Field #1', 'Field #2', 'Field #3'].map(field => currentTranslations[field] || field),
                datasets: [{
                    label: currentTranslations['Current Moisture (%)'] || 'Current Moisture (%)',
                    data: [58, 32, 45],
                    backgroundColor: ['rgba(255, 158, 27, 0.7)', 'rgba(214, 40, 40, 0.7)', 'rgba(255, 158, 27, 0.7)'],
                    borderColor: ['rgb(255, 158, 27)', 'rgb(214, 40, 40)', 'rgb(255, 158, 27)'],
                    borderWidth: 1
                }, {
                    label: currentTranslations['Optimal Range'] || 'Optimal Range',
                    data: [60, 60, 60],
                    backgroundColor: 'rgba(43, 147, 72, 0.3)',
                    borderColor: 'rgba(43, 147, 72, 0.7)',
                    borderWidth: 1,
                    type: 'line'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: currentTranslations['Soil Moisture Comparison'] || 'Soil Moisture Comparison',
                        font: { size: 16, family: '"Poppins", sans-serif' }
                    },
                    legend: { position: 'bottom' }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: currentTranslations['Moisture (%)'] || 'Moisture (%)',
                            font: { size: 12, family: '"Poppins", sans-serif' }
                        }
                    }
                }
            }
        });
    }

    // Initial chart creation
    createCharts(localStorage.getItem('language') || 'en');

    // Re-create charts when language changes
    document.body.addEventListener('languageChange', (e) => {
        createCharts(e.detail.lang);
    });
});