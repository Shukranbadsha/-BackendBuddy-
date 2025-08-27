import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [details, setdetails] = useState([])
 
  useEffect(()=>{
    axios.get("/api/detailes")
  .then((response)=>{
   setdetails(response.data)
  }
  )
},)
  
  

  return (
    <div>
      <h1>Details printed</h1>
     <p> details:{details.length}</p>

      {
    details.map((details)=>
      (
      <dev key={details.id}>
      <h1>{details.title}</h1>
      <p1>{details.content}</p1>
      </dev>  ))
}
    </div>

  )
}

export default App
