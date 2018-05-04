//Required modules
const buildMarker = require("./marker");

//This is Brooklyn
console.log("Hello from Brooklyn");

//This is our Mapbox
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiZGNhc3RpbGxvMyIsImEiOiJjamdzM3ZlMWkwZDc4MnFtcTJsdWhseWJjIn0.hN92Yme2y69jkMdTCASk5w";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

//error can also be here
const marker = buildMarker("restaurants", [-74.009151, 40.705086]).addTo(map) // or [-87.6354, 41.8885]

// console.log(marker);

//Factory Example
// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);