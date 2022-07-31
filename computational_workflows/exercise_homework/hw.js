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

var marker = new mapboxgl.Marker();

function addMarker (event) {
  
  //add marker
  map.on('click', addMarker.bind(this));
  var coordinates = event.lngLat;
  console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
  marker.setLngLat(coordinates).addTo(map);

  //add popup window
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
};

map.on('click', addMarker);

 map.on('mouseenter', 'stoop', () => {
      map.getCanvas().style.cursor = 'pointer';
    });
  
map.on('mouseleave', 'stoop', () => {
      map.getCanvas().style.cursor = '';
    });
