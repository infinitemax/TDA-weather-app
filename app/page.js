"use client";
import dotenv from "dotenv";
dotenv.config();
import { ApiClient } from "@/ApiClient/client";
import DayCard from "@/components/DayCard";
import { useState, useEffect } from "react";
import Toggle from "@/components/Toggle";
import TopBar from "@/components/TopBar";

export default function Home() {
  // manage the type of unit
  const [units, setUnits] = useState("metric");


  const apiClient = new ApiClient();

  const key = process.env.NEXT_PUBLIC_APIKEY;

  const [weeklyWeather, setWeeklyWeather] = useState([]);

  const [isError, setIsError] = useState(false);

  const getWeather = async () => {
    try {
      const weatherArray = await apiClient.getWeather("", "", key, units);
      setIsError(false);
      return weatherArray;
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
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

  //related to passing functions around
  // const [count, setCount] = useState(0);

  // const counting = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <TopBar 
      //  the count stuff was to help me understand about passing funcitons around
        // currentCount={count} 
        // updateCount={() => counting()} 
        currentState={units}
        updateState={(newState) => setUnits(newState)}

      />
      <h1>What's the weather?</h1>
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
