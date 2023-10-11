"use client"
import { useEffect } from "react"

const DayCard = ({day, date, summary, maxTemp, minTemp, windSpeed, icon, units}) => {


  const determineTemp = (temp, unit) => {
    if (unit === "metric") {
        const celsTemp = (temp - 273.15).toFixed(2);
        return `${celsTemp} °C`;
    } else {
        const farTemp = (((temp - 273.15) * 1.8) + 32).toFixed(2);
        return `${farTemp} °F`;
    }
}

  return (
    <div className='shadow-md px-4 py-6 rounded-md bg-purple-200'>
        <h2>{day} </h2>
        <h3>{date}</h3>
        <h3>{summary}</h3>
        <p>Max temp: {determineTemp(maxTemp, units)}</p>
        <p>Min temp: {determineTemp(minTemp, units)}</p>
        <p>Wind speed: {windSpeed} m/ps</p>
        <img src={icon}/>

    
    </div>
  )
}

export default DayCard