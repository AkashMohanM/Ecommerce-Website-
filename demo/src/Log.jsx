import React, { useState } from 'react'
import { Login } from './Login'
import { Registor } from './Registor'
import "./Log.css"
// import { Link } from 'react-router-dom'

export const Log = () => {
const[loged,setLoged]=useState(false)

const emailIt=()=>{
    setLoged(!loged)
}
console.log(loged);
  return (
    <div>
        <div>
         {  loged?<Registor emailIt={emailIt}/>:<Login emailIt={emailIt}/>}
        </div>
      
    </div>
  )
}
