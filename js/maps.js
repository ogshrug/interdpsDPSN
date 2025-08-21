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
            position: { lat: 30.736617, lng: 76.732806 },
            status: "optimal",
            data: { moisture: "72%", ph: "6.2", nitrogen: "84%" }
        },
        {
            name: "South Field",
            position: { lat: 28.571485, lng: 77.177288 },
            status: "critical",
            data: { moisture: "32%", ph: "5.1", nitrogen: "68%" }
        },
        {
            name: "East Field",
            position: { lat: 28.575211, lng: 77.336404 },
            status: "moderate",
            data: { moisture: "45%", ph: "5.8", nitrogen: "91%" }
        }
    ];

    const bounds = new google.maps.LatLngBounds();

    // Add polygons for each field
    fields.forEach(field => {
        // Set polygon color based on status
        let polygonColor;
        switch (field.status) {
            case "optimal":
                polygonColor = "#2B9348";
                break;
            case "moderate":
                polygonColor = "#FF9E1B";
                break;
            case "critical":
                polygonColor = "#D62828";
                break;
            default:
                polygonColor = "#2B9348";
        }

        // NOTE: The polygon is a simple square because the sample data only provides a center point.
        // For real-world applications, you would use a service to get actual field boundaries.
        // Define the bounds for the polygon
        const polygonPath = [
            { lat: field.position.lat + 0.01, lng: field.position.lng - 0.01 },
            { lat: field.position.lat + 0.01, lng: field.position.lng + 0.01 },
            { lat: field.position.lat - 0.01, lng: field.position.lng + 0.01 },
            { lat: field.position.lat - 0.01, lng: field.position.lng - 0.01 },
        ];

        // Create the polygon
        const fieldPolygon = new google.maps.Polygon({
            paths: polygonPath,
            strokeColor: polygonColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: polygonColor,
            fillOpacity: 0.35,
            map: map,
        });

        // Extend the map bounds to include this polygon
        polygonPath.forEach(latLng => bounds.extend(latLng));

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
            content: contentString,
            position: field.position
        });

        // Add click event to polygon
        fieldPolygon.addListener("click", () => {
            infoWindow.open(map);
        });
    });

    // Fit the map to the bounds of all polygons
    if (fields.length > 0) {
        map.fitBounds(bounds);
    }
}

// Initialize Google Map when the API is loaded
window.initMap = initMap;