import React from 'react'

const Title = ({location}) => {

  let title = location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <div className='pb-8'>
        <h1 className='text-6xl text-slate-600'>{title}</h1>
    </div>
  )
}

export default Title