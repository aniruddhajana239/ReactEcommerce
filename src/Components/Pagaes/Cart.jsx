import React from 'react'
import { NavLink } from 'react-router-dom';

const Cart = () => {
    return (
        <>
           <div className="main_body">
               <div className="empty_cart">
                   <h1>Your cart is empty!</h1>
                   <NavLink to='/'>Please add some product</NavLink>
               </div>
           </div>
        </>
    )
}

export default Cart;
