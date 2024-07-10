import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

export const Login = ({emailIt}) => {
  const[input,setInput]=useState({
    email:"",
    pwd:""
  })

  let Navigate=useNavigate()

  const handileLogin=(e)=>{
    e.preventDefault()
   let loguser= JSON.parse(localStorage.getItem("log"))
   console.log("arun");
   if(input.email===loguser.email && input.pwd===loguser.pwd){
    // localStorage.setItem("loin",true)
    console.log("akash");
    Navigate("/")
   }

  }
  return (
    <div>
      <div>
        <form action="" onSubmit={handileLogin}>
        <input type="email" name='email' value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
  <input type="password" name='pwd' value={input.pwd} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
      <input type="submit" />
        </form>
      </div>
      <div>
        <h5 onClick={emailIt}>Registor</h5>
      </div>
    </div> )
}
