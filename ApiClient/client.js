import axios from "axios";
import { Day } from "@/classes/dayClass";

export class ApiClient {
    async getWeather(lat, lon, key, units) {
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=53.3806626&lon=-1.4702278&appid=${key}&units=metric`)

        const nextEightDays = response.data.daily

        const forecastArray = []

        nextEightDays.forEach(day => {
            // get date and day from openweather's seconds
            const milliseconds = day.dt * 1000;
            const date = new Date(milliseconds)
            const ddmm = date.toLocaleDateString('en-gb', {day:'numeric', month:'short'})
            const weekday = date.toLocaleDateString('en-gb', {weekday:'long'})

            // capitalise summary
            const summary = (day.weather[0].description)

            // create a new day object for each day and add it to the forecast array
            const item = new Day (weekday, ddmm, day.weather[0].description, day.temp.max, day.temp.min, day.wind_speed)
            forecastArray.push(item);
        })

        // console.log(forecastArray)

        return forecastArray;
    }

    // weatherArray()


    async getLatAndLon(city, country) {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=fc64af83cad104b688970bfefc1d6680`)

        const lat = response.data[0].lat
        const lon = response.data[0].lon

        console.log(`lat is ${lat} and lon is ${lon}`)
    }
}