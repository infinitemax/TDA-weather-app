import React, { useState, useEffect } from 'react'
import { ApiClient } from '@/ApiClient/client'
import dotenv from "dotenv";
dotenv.config();


const OldCityInput = () => {

    const key = process.env.NEXT_PUBLIC_APIKEY;

    const apiClient = new ApiClient;

    
    const [latitudeAndLongitude, setLatitudeAndLongitude] = useState(null)


    const [formValues, setFormValues] = useState("")
    const [targetCity, setTargetCity] = useState("")
    
    
    const handleCityInput = async (event, inputText) => {
  
        event.preventDefault();
        setTargetCity(formValues)
        setFormValues("");
        
        console.log(`making api call for city name: ${inputText}`)

        const coordinateData = await apiClient.getLatAndLon(inputText, key)

        console.log(coordinateData)

        setLatitudeAndLongitude(coordinateData)

    }
    
    useEffect(() => {
       
            console.log('updated')
            console.log(latitudeAndLongitude)
        
    }, [latitudeAndLongitude])



    // useEffect(() => {
    //     console.log(targetCity);
    // }, [targetCity]); // This will run the effect whenever targetCity changes

  return (

    <div className='cityForm'>
        <form onSubmit={(event) => {
            handleCityInput(event, formValues) 
        }}>
            <label>Enter city:</label>
            <input
                value={formValues}
                onChange={(event) => {
                    setFormValues(event.target.value)
                }} 
            >
            </input>
            <button type='submit'>Go!</button>
        </form>
    </div>















    // <div className='cityInput'>
    //     City:
    //     <input
    //         value={formValues}
    //         onChange={(event) => {
                
    //             setFormValues(event.target.value)
    //             setTargetCity(formValues)
    //         }}
    //     ></input>
    //     <button onClick={() => {
            
    //         handleCityInput(targetCity)
    //         setFormValues("")
    //     }}>Go!</button>
    // </div>
    //this isn't working properly - need to work out how to clear the form and to get the complete target city 


// <div>
    //     <form
    //         onSubmit={(event) => {
    //             event.preventDefault()
    //             formValues(event.target[0].value)
    //             setTargetCity(event.target[0].value)
    //             console.log(targetCity)
    //             apiClient.getLatAndLon(targetCity, key)
    //             setFormValues("")
    //         }}>
    //         <input 
    //             value = {formValues}
    //             placeholder='enter city'></input>
    //         <button type='submit'>Enter</button>
    //     </form>
    // </div>



  )
}

export default OldCityInput