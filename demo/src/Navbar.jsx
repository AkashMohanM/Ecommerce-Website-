import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
// import { Data } from './Data'
export const Navbar = ({size ,searchItem,Search}) => {
    return (
        <div>
            <div className='nav'>
                <li><Link to="/">MY PAGE</Link></li>
                <input type="text" placeholder='SEARCH' value={searchItem} onChange={Search}/>
                
                <li><Link to="cart"><h3><i className="fas fa-cart-plus"></i><span>{size}</span></h3></Link></li>
                <li><Link to="log"> <span>&#129333;&#127997;</span></Link></li>
               
            </div>
        </div>
    )
}
