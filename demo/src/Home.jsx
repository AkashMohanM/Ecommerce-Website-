import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
// import { Data } from './Data'


export const Home = ({data,clickBottun,setCart}) => {

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setCart(items);
    }
  }, []);

  return (
    <div className='mobileAll'>
        <div className='mobile'>

        {data.map((item,ins)=><div key={ins}><Link to="link"><img src={item.img} alt="" onClick={()=>clickBottun(item)} /></Link></div>)}
     
        </div>
        
    </div>
  )
}
