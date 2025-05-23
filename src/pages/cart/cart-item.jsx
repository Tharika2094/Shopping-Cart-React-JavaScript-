import React,{useContext} from 'react'
import {ShopContext} from '../../coontext/shop-context'

export const CartItem = (props) => {
    const {id,productName,price,productImage,details}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount} =useContext(ShopContext);
  
    return (
    <div className='cartItem'>
        <img src={productImage}></img>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <p className='details'>{details}</p>
            <div className='countHandler'>
                <button onClick={()=>removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}></input>
                <button onClick={()=>addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
