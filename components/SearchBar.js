"use client"
import React from "react";
import { useState } from "react";

const SearchBar = ({ handleCitySearch }) => {

    const [formValues, setFormValues] = useState("")

  return (
    <div className="w-screen h-24 bg-slate-600 text-slate-100">
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleCitySearch(formValues);
          }}
        >
          <label>Enter city:</label>
          <input
            className="text-slate-700"
            placeholder="your city"
            value={formValues}
            onChange={(event) => {
              setFormValues(event.target.value);
            }}
          ></input>
          <button type="submit">Go!</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
