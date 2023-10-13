"use client";
import dotenv from "dotenv";
dotenv.config();
import { ApiClient } from "@/ApiClient/client";
import DayCard from "@/components/DayCard";
import { useState, useEffect } from "react";
import TopBar from "@/components/TopBar";
import Title from "@/components/Title";

export default function Home() {
  // manage the type of unit
  const [units, setUnits] = useState("metric");


  const apiClient = new ApiClient();

  const key = process.env.NEXT_PUBLIC_APIKEY;

  const [weeklyWeather, setWeeklyWeather] = useState([]);

  const [isError, setIsError] = useState(false);

  // const getWeather = async () => {
  //   try {
  //     const weatherArray = await apiClient.getWeather("53.3806626", "-1.4702278", key);
  //     setIsError(false);
  //     return weatherArray;
  //   } catch (error) {
  //     setIsError(true);
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   console.log("hello");

  //   getWeather().then((result) => {
  //     setWeeklyWeather(result);
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log(weeklyWeather);
  // }, [weeklyWeather]);

  //related to passing functions around
  // const [count, setCount] = useState(0);

  // const counting = () => {
  //   setCount(count + 1);
  // };


  // dealing with the city search

  const [city, setCity] = useState("")
  const [coordinates, setCoordinates] = useState ({})

  const handleCitySearch = (searchTerm) => {
    setCity(searchTerm)
    console.log('city updated')
  }

  useEffect(() => {
    console.log(city)
  }, [city])
  

// new city search

  const handleNewCitySearch = async (newSearch) => {
    setCity(newSearch)
    console.log('we have searched')
    const coords = await apiClient.getLatAndLon(newSearch, key)
    setCoordinates(coords)

    const newWeatherObject = await apiClient.getWeather(coords.latitude, coords.longitude, key)
    console.log(newWeatherObject)
    setWeeklyWeather(newWeatherObject)
  }

  useEffect(() => {
    console.log(`new city useEffect... ${city}`)

  }, [city])



  return (
    <>
      <TopBar 
      //  the count stuff was to help me understand about passing funcitons around
        // currentCount={count} 
        // updateCount={() => counting()} 
        currentState={units}
        updateState={(newState) => setUnits(newState)}
        handleNewCitySearch={handleNewCitySearch}

      />

      
      {/* <p>Count = {count}</p> */}
      {/* The below was the previous placement of the toggle component */}
      {/* <div className="flex bg-blue-100 justify-center h-16">
        <div className="flex gap-4 items-center">
          <p className="text-2xl text-slate-800">Metric</p>
          <Toggle
            currentState={units}
            updateState={(newState) => setUnits(newState)}
          />
          <p className="text-2xl text-slate-800">Imperial</p>
        </div>
      </div> */}

      <main className="flex flex-col min-h-screen items-center justify-between p-8">
  
        {isError && <p>Oh no, it looks like there's no weather!</p>}
        {!isError && <Title location={city}/>}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {weeklyWeather?.map((day) => {
            return (
              <DayCard
                key={day.id}
                day={day.day}
                date={day.date}
                summary={day.summary}
                maxTemp={day.maxTemp}
                minTemp={day.minTemp}
                windSpeed={day.windSpeed}
                icon={day.icon}
                units={units}
              />
            );
          })}
        </div>

      
   
      </main>
    </>
  );
}
