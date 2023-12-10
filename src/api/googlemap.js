import { Loader } from '@googlemaps/js-api-loader';
const loader = new Loader({
  apiKey: "AIzaSyB8n7oqwjOa6pKnswGR5aPPvLfFcHLi8EY",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

loader
  .load()
  .then(() => {
    new google.maps.Map(document.getElementById("map"), mapOptions);
  })
  .catch(e => {
    // do something
  });