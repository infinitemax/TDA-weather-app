"use client";
import React, { useState } from "react";
import Toggle2 from "./Toggle2";
import Toggle from "./Toggle";
import NewCitySearch from "./NewCitySearch";

const TopBar = ({currentCount, updateCount, currentState, updateState, handleNewCitySearch}) => {
  return (
    <div className="bg-blue-100 justify-center h-24 px-12">


      <div className="flex flex-wrap items-center justify-between p-8">
        <NewCitySearch
          handleNewCitySearch={handleNewCitySearch}
        />
        <Toggle
          currentState={currentState}
          updateState={(newState) => updateState(newState)}
        />
      </div>


          {/* Toggle2 is a test toggle, to help us understand how to pass functions around between components */}
      {/* <Toggle2 
        currentCount={currentCount}
        updateCount={() => updateCount()}
        
      /> */}

      {/* <OldCityInput /> */}
    </div>
  );
};

export default TopBar;
