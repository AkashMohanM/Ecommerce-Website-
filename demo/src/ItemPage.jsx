import React, { useState, useEffect } from 'react'
import "./ItemPage.css"
import { Star } from './Star'

export const ItemPage = ({ setCart, cart, clickBottunCart }) => {

  let product = localStorage.getItem("product")
  let list = JSON.parse(product)

  const [change, setChage] = useState([list.img])
  const ImageChange = (e) => {
    setChage(e)
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setCart(items);
    }
  }, []);
  
  return (
    <div className='itemall'>

      <div>
        <div className='border'>
          <div className='pad'>
            {
              list.imgs.map((item, ins) => <div key={ins} className='pagename'><img src={item} alt={list.name} onMouseOver={() => ImageChange(item)} /></div>)
            }
          </div>
          <div className='change'>
            <img src={change} alt={list.name} />
          </div>
          <div className='lists'>
            <h1>{"NAME         : "+list.name}</h1>
            <Star/>
            <h2>{"BRANDS       : "+list.brands}</h2>
            <h4>{list.ditile}</h4>
            <h4>{list.ditiles}</h4>
            <h4>{list.heading2}</h4>
            <h4>{list.heading1}</h4>
            <h3>{"PRICE        : "+list.price}</h3>
          </div>
          <div className='buts'>
          <button onClick={() => clickBottunCart(list)}>CART</button><button>ADD</button>
        </div>
        </div>
        
      </div>
    </div>
  )
}
