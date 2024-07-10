import React, { useState } from 'react'
import "./Registor.css"
// import { useNavigate } from 'react-router-dom'

// let Navigate=useNavigate()

export const Registor = ({emailIt}) => {
 const[input,setInput]=useState({name:"",email:"",number:"",pwd:"",re_pwd:""})

const onsubmit=(e)=>{
  e.preventDefault()
  localStorage.setItem("log",JSON.stringify(input))
  // Navigate("loged")
}

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInput(values => ({...values, [name]: value}))
}
 console.log(input);
  return (
    <div className='form-f'>
      <div className='form-r'>
<form action="" onSubmit={onsubmit} className='form'>
  <input type="text" placeholder='name' name='name' value={input.name} onChange={handleChange}/>
  <input type="tel"  placeholder='number' name='number' value={input.number}  onChange={handleChange}/>
  <input type="email" name='email'  placeholder='email' value={input.email} onChange={handleChange}/>
  <input type="password" name='pwd'  placeholder='pwd' value={input.pwd} onChange={handleChange}/>
  <input type="password" name='re_pwd'  placeholder='re-pwd' value={input.re_pwd} onChange={handleChange}/>
  <input type="submit" />
      <div>
        <h5 onClick={emailIt}>Log in</h5>
      </div>
</form>
    
      </div>
     
    </div>
  )
}
