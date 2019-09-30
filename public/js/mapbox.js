/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibG91aXNqdWxpZW5kbyIsImEiOiJjazEwbjI2dG0wMGdvM2RvOThpNW41dnl2In0.erICPa5N9zyyD9wu4TDzWQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/louisjuliendo/ck10n68y20q2x1cokkv71oxv6',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 10
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
