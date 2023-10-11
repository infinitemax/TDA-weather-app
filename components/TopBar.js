"use client";
import React, { useState } from "react";
import Toggle2 from "./Toggle2";
import Toggle from "./Toggle";
import CityInput from "./CityInput";

const TopBar = ({currentCount, updateCount, currentState, updateState}) => {
  return (
    <div className="bg-blue-100 flex justify-center h-24">
    {/* Toggle2 is a test toggle, to help we understand how to pass functions around between components */}
      {/* <Toggle2 
        currentCount={currentCount}
        updateCount={() => updateCount()}
        
      /> */}

      <CityInput />

      <Toggle 
        currentState={currentState}
        updateState={(newState) => updateState(newState)}
      />
    </div>
  );
};

export default TopBar;
