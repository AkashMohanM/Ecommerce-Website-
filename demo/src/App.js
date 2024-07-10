import './App.css';
import { Cart } from './Cart';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Routes, Route } from "react-router-dom"
import { Data } from './Data';
import { useState, useEffect } from 'react';
import { ItemPage } from './ItemPage';
import { Log } from './Log';
import { Login } from './Login';
import { Registor } from './Registor';

function App() {
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false);
  const [searchItem,setSearchItem]=useState('')

  const clickBottunCart = (item) => {
    let isPresent = false;

    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify(item))
  }

const Search=(item)=>{
setSearchItem(item.target.value)
}

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }

  const clickBottun = (e) => {
    localStorage.setItem("product", JSON.stringify(e))
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cart));
  }, [cart]);

  const Datas=[...Data].filter((item)=>{
    return item.name||item.price||item.brands?Object.keys(item).some((val)=>item[val].toString().toLowerCase().includes(searchItem.toString().toLowerCase())):""
   })

  return (
    <>
      <div>
        <Navbar size={cart.length} Search={Search} searchItem={searchItem}/>
        <Routes>
          <Route path='/' element={<Home clickBottun={clickBottun} data={Datas} setCart={setCart} />} />
          <Route path='link' element={<ItemPage setCart={setCart} cart={cart} clickBottunCart={clickBottunCart} />} />
          <Route path='cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
          <Route path='log' element={<Log/>} />
          <Route path='loged' element={<Login/>} />
          <Route path='loguser' element={<Registor/>} />
        </Routes>
      </div>
    </>
  );
}


export default App;
