//Required modules
const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, array) => {
    const markerDomEl = document.createElement("div");
    const backgroundImages = `url(${iconURLs[type]})`;

    console.log(backgroundImages);
    
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = backgroundImages;

    //error is here
    return new mapbox.Marker(markerDomEl).setLngLat(array);
};

module.exports = buildMarker;