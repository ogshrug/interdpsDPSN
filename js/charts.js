document.addEventListener('DOMContentLoaded', function() {
    // Soil Health Chart
    const soilCtx = document.getElementById('soilChart').getContext('2d');
    const soilChart = new Chart(soilCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Field #1',
                data: [65, 68, 70, 72, 74, 72],
                borderColor: 'rgb(43, 147, 72)',
                backgroundColor: 'rgba(43, 147, 72, 0.1)',
                tension: 0.3,
                fill: true
            }, {
                label: 'Field #2',
                data: [70, 68, 65, 60, 55, 50],
                borderColor: 'rgb(214, 40, 40)',
                backgroundColor: 'rgba(214, 40, 40, 0.1)',
                tension: 0.3,
                fill: true
            }, {
                label: 'Field #3',
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
                    text: 'Soil Health Trends',
                    font: {
                        size: 16,
                        family: '"Poppins", sans-serif'
                    }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 40,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Health Index',
                        font: {
                            size: 12,
                            family: '"Poppins", sans-serif'
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month',
                        font: {
                            size: 12,
                            family: '"Poppins", sans-serif'
                        }
                    }
                }
            }
        }
    });

    // Nutrients Chart
    const nutrientsCtx = document.getElementById('nutrientsChart').getContext('2d');
    const nutrientsChart = new Chart(nutrientsCtx, {
        type: 'radar',
        data: {
            labels: ['Nitrogen', 'Phosphorus', 'Potassium', 'Iron', 'Zinc', 'Manganese'],
            datasets: [{
                label: 'Field #1',
                data: [72, 60, 84, 80, 40, 65],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }, {
                label: 'Optimal',
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
                    text: 'Nutrient Balance',
                    font: {
                        size: 16,
                        family: '"Poppins", sans-serif'
                    }
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Temperature Chart
    const temperatureCtx = document.getElementById('temperatureChart').getContext('2d');
    const temperatureChart = new Chart(temperatureCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Soil Temperature (°C)',
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
                    text: '7-Day Soil Temperature',
                    font: {
                        size: 16,
                        family: '"Poppins", sans-serif'
                    }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // Moisture Chart
    const moistureCtx = document.getElementById('moistureChart').getContext('2d');
    const moistureChart = new Chart(moistureCtx, {
        type: 'bar',
        data: {
            labels: ['Field #1', 'Field #2', 'Field #3'],
            datasets: [{
                label: 'Current Moisture (%)',
                data: [58, 32, 45],
                backgroundColor: [
                    'rgba(255, 158, 27, 0.7)',
                    'rgba(214, 40, 40, 0.7)',
                    'rgba(255, 158, 27, 0.7)'
                ],
                borderColor: [
                    'rgb(255, 158, 27)',
                    'rgb(214, 40, 40)',
                    'rgb(255, 158, 27)'
                ],
                borderWidth: 1
            }, {
                label: 'Optimal Range',
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
                    text: 'Soil Moisture Comparison',
                    font: {
                        size: 16,
                        family: '"Poppins", sans-serif'
                    }
                },
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Moisture (%)',
                        font: {
                            size: 12,
                            family: '"Poppins", sans-serif'
                        }
                    }
                }
            }
        }
    });
});