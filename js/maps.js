// Initialize Google Map
function initMap() {
    // Map options - centered on India
    const mapOptions = {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
        styles: [
            {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [{ visibility: "simplified" }]
            },
            {
                featureType: "landscape",
                elementType: "all",
                stylers: [{ color: "#f2f2f2" }]
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "road",
                elementType: "all",
                stylers: [{ saturation: -100 }, { lightness: 45 }]
            },
            {
                featureType: "water",
                elementType: "all",
                stylers: [{ color: "#C5E8FF" }, { visibility: "on" }]
            }
        ]
    };

    // Create map
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Sample field data
    const fields = [
        {
            name: "North Field",
            position: { lat: 28.7041, lng: 77.1025 },
            status: "optimal",
            data: { moisture: "72%", ph: "6.2", nitrogen: "84%" }
        },
        {
            name: "South Field",
            position: { lat: 19.0760, lng: 72.8777 },
            status: "critical",
            data: { moisture: "32%", ph: "5.1", nitrogen: "68%" }
        },
        {
            name: "East Field",
            position: { lat: 22.5726, lng: 88.3639 },
            status: "moderate",
            data: { moisture: "45%", ph: "5.8", nitrogen: "91%" }
        }
    ];

    // Add markers for each field
    fields.forEach(field => {
        // Set marker color based on status
        let markerColor;
        switch (field.status) {
            case "optimal":
                markerColor = "#2B9348";
                break;
            case "moderate":
                markerColor = "#FF9E1B";
                break;
            case "critical":
                markerColor = "#D62828";
                break;
            default:
                markerColor = "#2B9348";
        }

        // Create custom marker
        const marker = new google.maps.Marker({
            position: field.position,
            map: map,
            title: field.name,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: markerColor,
                fillOpacity: 0.9,
                strokeWeight: 2,
                strokeColor: "#ffffff",
                scale: 10
            }
        });

        // Create info window content
        const contentString = `
            <div class="p-3">
                <h3 class="font-bold text-lg mb-2">${field.name}</h3>
                <p class="mb-1"><span class="font-medium">Status:</span> <span class="${field.status === 'optimal' ? 'text-green-600' : field.status === 'moderate' ? 'text-yellow-600' : 'text-red-600'}">${field.status.charAt(0).toUpperCase() + field.status.slice(1)}</span></p>
                <p class="mb-1"><span class="font-medium">Moisture:</span> ${field.data.moisture}</p>
                <p class="mb-1"><span class="font-medium">pH Level:</span> ${field.data.ph}</p>
                <p class="mb-1"><span class="font-medium">Nitrogen:</span> ${field.data.nitrogen}</p>
                <button class="mt-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">View Details</button>
            </div>
        `;

        // Create info window
        const infoWindow = new google.maps.InfoWindow({
            content: contentString
        });

        // Add click event to marker
        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}

// Initialize Google Map when the API is loaded
window.initMap = initMap;