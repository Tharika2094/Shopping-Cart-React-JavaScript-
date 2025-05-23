import React,{useContext} from 'react'
import {PRODUCTS} from "../../products"
import {ShopContext} from '../../coontext/shop-context'
import {Product} from "../shop/product"
import {CartItem} from "../cart/cart-item"
import '../cart/cart.css'
import {useNavigate} from 'react-router-dom'

export const Cart = () => {
  const {cartItems,getTotalCartAmount} =useContext(ShopContext);
  const totalAmount=getTotalCartAmount()

  const navigate=useNavigate()

  return (
    <div className='cart'>
      <div>
        <h2>Your Cart Items</h2>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      {totalAmount>0?
      <div className='checkout'>
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={()=>navigate("/")}>Countinu Shopping</button>
        <button>Checkout</button>
      </div>
      :<h3>Your Cart is Empty</h3>}
    </div>
  )
}
