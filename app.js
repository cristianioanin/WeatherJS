// Initialize Storage Object
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Initialize UI Object
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-button').addEventListener('click', (event) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Call Weather method for location change
  weather.changeLocation(city, country);

  // Set location to LocalStorage
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close the modal... jQuery!?
  $('#locationModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.render(results);
    })
    .catch(error => console.log(error));
}
