import React, { useState } from 'react'
import "./Star.css"
import { FaStar } from 'react-icons/fa6'
export const Star = () => {
    const[rating,setRating]=useState(null)
    const[hover,setHover]=useState(null)
  return (
    <div>
        {[...Array(5)].map((start,ins)=>{
           
            let valueser=ins+1
            return(
        <label key={ins}>
            
            <input type='radio' name="rating" value={valueser} onClick={()=>setRating(valueser)}/>
            {/* <img className="star" style={{width:"20px",color:valueser <= (hover||rating)?"red":"blue",}} src="./star.png" alt="" /> */}
            <FaStar className='star' size={20} color={valueser <= (hover||rating)?"red":"#e4e5e9"} onMouseEnter={()=>setHover(valueser)} onMouseLeave={()=>setHover(null)}/>
            </label>
        )})}
    </div>
  )
}
