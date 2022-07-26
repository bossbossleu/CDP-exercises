mapboxgl.accessToken = 'pk.eyJ1IjoiYm9zc2Jvc3NsZXUiLCJhIjoiY2trcHU5N2EyMGJwdDJvbnRvc2g2djNubSJ9.MH9jCElgj_r1kHN305ijZw';

var bounds = [
  [-74.60, 40.35], // southwest coordinates
  [-73.30, 41.15] // northeast coordinates
];

const map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-73.96, 40.80], 
  zoom: 12.5,
  maxZoom: 15,
  minZoom: 12,
  maxBounds: bounds,
});

map.on('load', () => {
    map.addSource('stoop', {

      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [{
            'type': 'Feature',
            'properties': {
              'image':'',
              'description': '',
              'icon': 'marker-15',
              
            },
            'geometry': {
              'type': 'Point',
              'coordinates': [-73.96, 40.80]
            }
          },
        ]
      }
    });

    map.addLayer({
      'id': 'stoop',
      'type': 'symbol',
      'source': 'stoop',
      'layout': {
        'icon-image': '{icon}',
        'icon-allow-overlap': true
      }
    });
  
    map.on('click', 'stoop', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
  

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
  
      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(
            `<head class="popup-main">
                <style>
                    * {box-sizing: border-box}
                </style>
            </head>
            <body>
                <h1>Upload stoop!</h1>
                    <form action="#">
                        <div>
                            <div style="display: block;">
                            <button>Take a photo</button>
                            <textarea placeholder="Description"></textarea>
                            <button>Upload</button>
                            </div>
                        </div>
                    </form>
            </body>
                          `
          )
        .addTo(map);
    });
  
    map.on('mouseenter', 'stoop', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
  
    map.on('mouseleave', 'stoop', () => {
      map.getCanvas().style.cursor = '';
    });
  });
