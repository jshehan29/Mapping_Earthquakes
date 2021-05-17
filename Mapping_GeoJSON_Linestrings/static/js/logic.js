// Add console.log to check to see if our code is working.
console.log("working");

// --------------------------------------------------------

// // 13.5.5
// // We create the tile layer that will be the background of our map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // 13.5.4
// // We create the dark view tile layer that will be an option for our map
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// 13.5.5 - Skill Drill
// We create the tile layer that will be the background of our map.
let dayNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 13.5.4
// We create the dark view tile layer that will be an option for our map
let nightNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// 13.5.5
// Create a base layer that holds both maps
let baseMaps = {
    "Day Navigation": dayNav,
    "Night Navigation": nightNav
};

// Create the map object with a center and zoom level
// 13.5.5
let map = L.map("mapid", {
    center: [40.7, -80.0],
    zoom: 2,
    layers: [dayNav]
});

// 13.5.4
// Pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// --------------------------------------------------------

// 13.5.5
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/jshehan29/Mapping_Earthquakes/main/torontoRoutes.json";

// 13.5.5
// Create a style for the lines
let myStyle = {
    color: "#ffffa1",
    weight: 2
};

// Grabbing our GeoJSON data.
// 13.5.5
// d3.json(torontoData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data, {
//       color: "#ffffa1",
//       weight: 2,
//       onEachFeature: function(feature, layer) {
//         layer.bindPopup("<h3> Airline: " + feature.properties.airline 
//         + "</h3> <hr> <h3> Destination: " + feature.properties.dst + "</h3>");
//       }
//   }).addTo(map);
// });

// 13.5.5 - Using sytle defined above for line style
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
      style: myStyle,
      onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3> Airline: " + feature.properties.airline 
        + "</h3> <hr> <h3> Destination: " + feature.properties.dst + "</h3>");
      }
  }).addTo(map);
});
