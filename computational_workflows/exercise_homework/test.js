map.on('load', () => {
  map.addSource('stoop', {
    // This GeoJSON contains features that include an "icon"
    // property. The value of the "icon" property corresponds
    // to an image in the Mapbox Streets style's sprite.
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [{
          'type': 'Feature',
          'properties': {
            'description': '<strong>Take a photo</strong><p>Leave a message.</p>',
            'icon': 'theatre-15'
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [-73.96, 40.80]
          }
        },
        
      ]
    }
  });
  // Add a layer showing the stoop.
  map.addLayer({
    'id': 'stoop',
    'type': 'symbol',
    'source': 'stoop',
    'layout': {
      'icon-image': '{icon}',
      'icon-allow-overlap': true
    }
  });

  // When a click event occurs on a feature in the stoop layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', 'stoop', (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the stoop layer.
  map.on('mouseenter', 'stoop', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'stoop', () => {
    map.getCanvas().style.cursor = '';
  });
});