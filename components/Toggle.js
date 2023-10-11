"use client"
import {useState} from 'react'

const Toggle = ({currentState, updateState}) => {


    // this was made with Alfie's help (well he basically did it all..)
    // the problem was knowing how to update state in the parent component, by toggling this switch
    // You can't pass props back up to a parent component, BUT YOU CAN PASS FUNCTIONS - so what we've done is we've created a useState in the parent which controls the unit (setUnits - either metric or farenheit). We pass that state to the Toggle as a prop, and we also pass "updateState", which is an anonymous function that calls setUnits with the new unit. Update state is then put into a function within Toggle (handleStateChange()) which is called when the toggle is changed. handleStateChange calls updateState, which has the effect of passing up the new unit to the parent, which then does setUnit and so the display changes the new units!!

    // It's complex, but it's starting to make sense!! Videos on passing functions as props have been very helpful.


  const [internalState, setInternalState] = useState(false)

  const handleStateChange = () => {
    if (currentState === "metric") {
      setInternalState(true)
      updateState("imperial")
    } else {
      setInternalState(false)
      updateState("metric")
    }
  }

  return (

    <div className='flex felx-wrap gap-4 items-center'>
    <p className="text-2xl text-slate-800">Metric</p>
       <div>
        <label className="switch">
        <input type="checkbox"
          checked={internalState}
        onChange={() => handleStateChange()}/>
        <span className="slider round"></span></label>
        </div>
        <p className="text-2xl text-slate-800">Imperial</p>
    </div>


  )
}

export default Toggle