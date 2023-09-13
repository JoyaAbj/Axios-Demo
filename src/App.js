import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
const [data, setData]= useState([])
  useEffect(()=>{
    axios.post('https://reqres.in/api/users',{
      "name": "Joya",
      "job": "developer"
    })
    .then(result=>console.log(result))
    .catch(error=>console.error(error));
  },[]);
  return (
    <div>
      <h1>Axios in React</h1>
      {/* {data.map((d,i)=>{
        return <p key={i}>{d.email}</p>
      })} */}
    </div>
  )
}

export default App
