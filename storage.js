class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = 'Tokyo';
    this.defaultCountry = 'JP';
  }

  getLocationData() {
    if (localStorage.getItem('WeatherJS') === null) {
      this.city = this.defaultCity;
      this.country = this.defaultCountry;
    } else {
      const weatherLocation = JSON.parse(localStorage.getItem('WeatherJS'));
      this.city = weatherLocation.city;
      this.country = weatherLocation.country;
    }

    return {
      city: this.city,
      country: this.country
    }
  }

  setLocationData(city, country) {
    localStorage.setItem('WeatherJS', JSON.stringify({ city: `${city}`, country: `${country}` }));
  }
}