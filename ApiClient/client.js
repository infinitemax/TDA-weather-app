import axios from "axios";
import { Day } from "@/classes/dayClass";

export class ApiClient {
  async getWeather(lat, lon, key) {
    // I've ended up putting it all in one massive function - instead I should have done the request as one small function, with a try / catch, and then the other functionality could have been added subsequently.

    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}`
    );


    // alfie code:
    //   if (!response.data.daily) {
    //     throw new Error()
    //   }

    const nextEightDays = response.data.daily;

    console.log(nextEightDays);

    const forecastArray = [];

    nextEightDays.forEach((day) => {
      // get date and day from openweather's seconds
      const milliseconds = day.dt * 1000;
      const date = new Date(milliseconds);
      const ddmm = date.toLocaleDateString("en-gb", {
        day: "numeric",
        month: "short",
      });
      const weekday = date.toLocaleDateString("en-gb", { weekday: "long" });

      // capitalise summary
      const summary = this.capitalise(day.weather[0].description);

      const icon = this.getIcon(day.weather[0].icon);

      // create a new day object for each day and add it to the forecast array
      const item = new Day(
        day.dt,
        weekday,
        ddmm,
        summary,
        day.temp.max,
        day.temp.min,
        day.wind_speed,
        icon
      );
      forecastArray.push(item);
    });

    // console.log(forecastArray)

    return forecastArray;
  }

  capitalise(sentence) {
    let array = sentence.split("");
    array[0] = array[0].toUpperCase();
    return array.join("");
  }

  getIcon(code) {
    return "https://openweathermap.org/img/wn/" + code + "@2x.png";
  }

  async getLatAndLon(city, key) {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`
      );

      const lat = response.data[0].lat;
      const lon = response.data[0].lon;

      const latLonObject = {
        latitude: 0,
        longitude: 0
      }

      latLonObject.latitude = response.data[0].lat;
      latLonObject.longitude = response.data[0].lon;

    //   console.log(`lat is ${lat} and lon is ${lon}`);
    //   console.log(latLonObject)

      return latLonObject
    } catch (error) {
      console.log(error);
    }
  }
}
