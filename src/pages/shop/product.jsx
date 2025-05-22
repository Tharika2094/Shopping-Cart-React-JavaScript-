import React from 'react'

export const Product = (props) => {
    const {id,productName,price,productImage,details}=props.data;
  return (
    <div className='product'>
        <img className='img' src={productImage}/>
        <div className='description'>
            <p><b>{productName}</b></p>
            <p className='details'>{details}</p>
            <p>${price}</p>
        </div>
        <button className='btn'>Add To Cart</button>
    </div>
  )
}
