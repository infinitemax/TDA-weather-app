"use client"
import { useEffect } from "react"

const DayCard = ({day, date, summary, maxTemp, minTemp, windSpeed, weatherObject}) => {
  useEffect(() => {
    console.log(summary)
  }, [summary])

  return (
    <div className='shadow-md px-4 py-6 rounded-md'>
        <h2>{day}</h2>
        <h3>{date}</h3>
        <h3>{summary}</h3>
        <p>Max temp: {maxTemp}</p>
        <p>Min temp: {minTemp}</p>
        <p>Wind speed: {windSpeed}</p>

    
    </div>
  )
}

export default DayCard