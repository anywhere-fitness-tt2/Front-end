import React, { useEffect, useState } from 'react' 
import styled from 'styled-components'; 
import axiosAuth from '../utils/axiosWithAuth'; 

const initialClasses = [
  {
    id:123, // added id for dummy data
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
    id: 321, // added id for dummy data
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
  // useEffect(() => {
  //   axiosAuth()
  //   .get('stuff')
  //   .then(res => {
  //     setClasses(res.data) //set to dummy data
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // },[])


  return (
    <div>
      {
        classes.map(item => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <h2>{item.type}</h2>
              <h2>{item.duration}</h2>
              <h2>{item.location}</h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default ClientProfile
