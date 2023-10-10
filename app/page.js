"use client";
import dotenv from "dotenv";
dotenv.config();
import { ApiClient } from "@/ApiClient/client";
import DayCard from "@/components/DayCard";
import { useState, useEffect } from "react";

export default function Home() {
  const apiClient = new ApiClient();

  const key = process.env.NEXT_PUBLIC_APIKEY;

  const [weeklyWeather, setWeeklyWeather] = useState([]);

  const getWeather = async () => {
    const weatherArray = await apiClient.getWeather("", "", key);
    return weatherArray;
  };



  useEffect(() => {
    console.log("hello");

    getWeather().then((result) => {

      setWeeklyWeather(result);
    });
  }, []);

  useEffect(() => {
    console.log(weeklyWeather);
  }, [weeklyWeather]);

  // get weather object

  // iterate through it and create a card for each day

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24">
      <h1>What's the weather?</h1>

      <div className="grid md:grid-cols-4">
        {weeklyWeather?.map((day) => {
          return (<DayCard
            day={day.day}
            date={day.date}
            summary={day.summary}
            maxTemp={day.maxTemp}
            minTemp={day.minTemp}
            windSpeed={day.windSpeed}
          />)
        })}
      </div>

      {/* <DayCard
        day="Monday"
        summary="Not very nice"
        maxTemp="10000000"
        minTemp="-90"
        windSpeed="fast"
      /> */}

      <button
        className="bg-blue-500 p-4 rounded-md"
        onClick={() => apiClient.getWeather("", "", key)}
      >
        Click me for weather
      </button>

      <button
        className="bg-green-500 p-4 rounded-md"
        onClick={() => apiClient.getLatAndLon("sheffield", "gb")}
      >
        Click me for location data
      </button>

      <button
        className="bg-red-500 p-4 rounded-md"
        onClick={() => console.log(key)}
      >
        Click me for the key
      </button>
    </main>
  );
}
