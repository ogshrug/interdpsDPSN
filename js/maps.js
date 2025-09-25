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
            name: "Field A (Noida)",
            position: { lat: 28.5720, lng: 77.3230 },
            status: "optimal",
            data: { moisture: "65%", ph: "7.1", nitrogen: "75%" }
        },
        {
            name: "Field B (Ludhiana)",
            position: { lat: 30.9010, lng: 75.8573 },
            status: "moderate",
            data: { moisture: "55%", ph: "6.8", nitrogen: "60%" }
        },
        {
            name: "Field C (Indore)",
            position: { lat: 22.7196, lng: 75.8577 },
            status: "critical",
            data: { moisture: "40%", ph: "7.5", nitrogen: "45%" }
        }
    ];

    const bounds = new google.maps.LatLngBounds();

    // Add polygons for each field
    fields.forEach(field => {
        // Set polygon color based on status
        let polygonColor;
        switch (field.status) {
            case "optimal":
                polygonColor = "#606d42";
                break;
            case "moderate":
                polygonColor = "#ba9642";
                break;
            case "critical":
                polygonColor = "#D62828";
                break;
            default:
                polygonColor = "#606d42";
        }

        // NOTE: The polygon is a simple square because the sample data only provides a center point.
        // For real-world applications, you would use a service to get actual field boundaries.
        // Define the bounds for the polygon
        const polygonPath = [
            { lat: field.position.lat + 0.0005, lng: field.position.lng - 0.0005 },
            { lat: field.position.lat + 0.0005, lng: field.position.lng + 0.0005 },
            { lat: field.position.lat - 0.0005, lng: field.position.lng + 0.0005 },
            { lat: field.position.lat - 0.0005, lng: field.position.lng - 0.0005 },
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
                <p class="mb-1"><span class="font-medium">Status:</span> <span style="color: ${polygonColor};">${field.status.charAt(0).toUpperCase() + field.status.slice(1)}</span></p>
                <p class="mb-1"><span class="font-medium">Moisture:</span> ${field.data.moisture}</p>
                <p class="mb-1"><span class="font-medium">pH Level:</span> ${field.data.ph}</p>
                <p class="mb-1"><span class="font-medium">Nitrogen:</span> ${field.data.nitrogen}</p>
                <button class="btn mt-2 px-3 py-1 rounded text-sm" onclick="document.getElementById('field-reports-division').scrollIntoView({ behavior: 'smooth' });">View Details</button>
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