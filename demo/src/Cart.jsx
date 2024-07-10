import { useEffect, useState } from 'react';
import './Cart.css'

export const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setCart(items);
    }
  }, []);



  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (
      ans += item.amount * item.price
    ))
    setPrice(ans);
  }

  useEffect(() => {
    handlePrice()
  })

  const removedItem = (list) => {
    let arr = cart.filter((element) => element.id !== list)
    setCart(arr)
  }

  let fff = localStorage.getItem("item")
  let yyy = JSON.parse(fff)
  console.log(yyy);


  return (
    <div>{
      cart.length == 0 ? "noitems" :
        <div>
          <div>
            {
              cart?.map((item, ins) => (
                <div key={ins}>
                  <div className='cartflex'>
                    <img src={item.img} alt={item.name} />
                    <div className='but'>
                      <button onClick={() => handleChange(item, +1)} >+</button>
                      <h4>{item.amount}</h4>
                      <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                    <span>{item.price}</span>
                    <div><button onClick={() => removedItem(item.id)}>REMOVE</button></div>

                  </div>
                </div>

              ))

            }
          </div>

          <div>{price}</div>
        </div>

    }</div>

  )
}


