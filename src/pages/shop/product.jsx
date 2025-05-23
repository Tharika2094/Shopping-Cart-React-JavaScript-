import React, { useContext } from 'react'
import {ShopContext} from '../../coontext/shop-context'

export const Product = (props) => {
    const {id,productName,price,productImage,details}=props.data;
    const {addToCart,cartItems} =useContext(ShopContext);    

    const cartItemAmount = cartItems[id]
    return (
    <div className='product'>
        <img className='img' src={productImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p className='details'>
                {details}
            </p>
            <p>${price}</p>
        </div>
        <button className='btn' onClick={()=>addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}
