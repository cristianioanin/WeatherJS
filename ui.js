class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.temperatureFahrenheit = document.getElementById('w-temperature-fahrenheit');
    this.temperatureCelsius = document.getElementById('w-temperature-celsius');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.cloudiness = document.getElementById('w-cloudiness');
    this.wind = document.getElementById('w-wind');
  }

  render(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.description.textContent = weather.weather[0]['description'];
    this.temperatureFahrenheit.textContent = `${this.convertTemperature(weather.main.temp).fahrenheit} °F`;
    this.temperatureCelsius.textContent = `${this.convertTemperature(weather.main.temp).celsius} °C`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0]['icon']}.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} hpa`;
    this.cloudiness.textContent = `Cloudiness: ${weather.clouds.all === 0 ? 'Sky is clear' : `${weather.clouds.all} %`}`;
    this.wind.textContent = `Wind speed: ${weather.wind.speed} m/s`;
  }

  convertTemperature(kelvin) {
    const celsius = Math.round(kelvin - 273.15);
    const fahrenheit = Math.round((celsius * 1.8) + 32);

    return {
      celsius,
      fahrenheit
    }
  }
}



/*
Convert from Kelvin to Fahrenheit	℉=((K-273.15)*1.8)+32	
Convert from Kelvin to Celsius	℃=K-273.15	
*/