import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../../components/CartItem/CartItem';

function PageCart() {
  const {cart} = useContext(CartContext);  
  return (
    <div>
      {
        cart.map((item) => {
          return <CartItem item ={item} key={item.id}/>
        })
      }
    </div>
  ) 
};

export default PageCart