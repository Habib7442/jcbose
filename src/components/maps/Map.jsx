import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([yourLatitude, yourLongitude], yourZoomLevel);

    // Add a tile layer (you can use a different tile provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker to the map
    L.marker([yourMarkerLatitude, yourMarkerLongitude]).addTo(map);
  }, []);

  return <div id="map" className="map-container" />;
};

export default Map;
