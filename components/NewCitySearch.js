"use client"

import React from 'react'
import { useState } from 'react'

const NewCitySearch = ({ handleNewCitySearch }) => {

    const [formValues, setFormValues] = useState("")

  return (
    <div className="flex flex-wrap items-center">
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleNewCitySearch(formValues);
            setFormValues("")
          }}
        >
          <label className='text-2xl text-slate-800'>Enter city:</label>
          <input
            className="text-slate-700 px-4 py-2 mx-2 rounded-md"
            placeholder="your city"
            value={formValues}
            onChange={(event) => {
              setFormValues(event.target.value);
            }}
          ></input>
          <button className='text-2xl text-slate-800 bg-red-400 px-2 rounded-md' type="submit">Go!</button>
        </form>
      </div>
    </div>
  );
};

export default NewCitySearch;