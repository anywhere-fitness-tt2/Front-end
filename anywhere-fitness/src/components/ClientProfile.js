import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axiosAuth from '../utils/axiosWithAuth';

const initialClasses = [
  {
    name:"Billy's Bootcamp",
    type:"Boxing",
    start:"2pm", // use datetime input for instructor form?
    duration:"3 minutes",
    intensity:"Medium",
    location:"Billy's Basement",
    registered:"3",
    maxClassSize:"6"
  },
  {
    name:"Forrest Gump's Cross Country Training",
    type:"Running",
    start:"3pm", // use datetime input for instructor form?
    duration:"1 Year",
    intensity:"High",
    location:"Highway 61",
    registered:"1",
    maxClassSize:"20"
  },
]

const ClientProfile = props => {
  const [ classes, setClasses ] = useState(initialClasses);

  // Renders registered classes
  useEffect(() => {
    axiosAuth()
    .get('stuff')
    .then(res => {
      setClasses(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])


  return (
    <div>
      I'm the Client Profile!
    </div>
  )
}

export default ClientProfile
