import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';

function checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
          <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/onsite/Apr18/PeX_1500x200._CB1198675309_.jpg" alt=""/>
        <div>
        <h2 className="checkout__title">
          Your Shopping Basket
        </h2>
        {/** Basket Item */}
        {/** Basket Item */}
        {/** Basket Item */}
        {/** Basket Item */}
        {/** Basket Item */}  
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default checkout