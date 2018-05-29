class Weather {
  constructor(cityName, countryCode) {
    this.apiKey = 'd9db51f4d8443b6a44691cc6cbf23558';
    this.city = cityName;
    this.country = countryCode;
  }

  // Fetch data from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
